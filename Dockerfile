FROM node:20-alpine AS lowcodenbuilder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . ./
RUN npm run build
RUN npm prune --production

FROM node:18-alpine AS lowcodenrunner
WORKDIR /app
COPY --from=lowcodenbuilder /app/build build/
COPY --from=lowcodenbuilder /app/node_modules node_modules/
COPY package.json ./
EXPOSE 3000
ENV NODE_ENV=production
CMD [ "node", "build" ]