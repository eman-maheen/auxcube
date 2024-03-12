const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const tailwindnesting = require('tailwindcss/nesting');
const postcssimport = require('postcss-import');

const config = {
	plugins: [
		postcssimport, 
		tailwindnesting,
		//Some plugins, like tailwindcss/nesting, need to run before Tailwind,
		tailwindcss(),
		//But others, like autoprefixer, need to run after,
		autoprefixer
	]
};

module.exports = config;
