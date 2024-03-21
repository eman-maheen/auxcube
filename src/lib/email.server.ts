import nodemailer from 'nodemailer';
import { SENDER_EMAIL, SENDER_EMAIL_PASSWORD, SENDER_EMAIL_SERVER } from "$env/static/private";
import type { Options } from "nodemailer/lib/mailer";

const transporter = nodemailer.createTransport({
  host: SENDER_EMAIL_SERVER,
  port: 587,
  secure: false,
  auth: {
    user: SENDER_EMAIL,
    pass: SENDER_EMAIL_PASSWORD,
  },
});

export const sendEmail = async (message: Options) => {
  await new Promise((resolve, reject) => {
    transporter.sendMail(message, (err, info) => {
      if (err) {
        console.error(err);
        reject(err);
      } else {
        resolve(info);
      }
    });
  });
};