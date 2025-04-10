require('dotenv').config()
import nodemailer from "nodemailer";

(async function run(){
    console.log('test')

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // true for port 465, false for other ports
        auth: {
          user: process.env.FROM_EMAIL,
          pass: process.env.FROM_PASSWORD,
        },
      });

      await transporter.sendMail({
        from: process.env.FROM_EMAIL, // sender address
        to: process.env.TO_EMAIL, // list of receivers
        subject: "Test", // Subject line
        text: `hewwo`, // plain text body
        html: `<b>hewwo</b>`, // html body
      });
})();