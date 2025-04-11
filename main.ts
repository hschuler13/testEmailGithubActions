require('dotenv').config()
import nodemailer from "nodemailer";
import axios from "axios"

(async function run(){
    console.log('test')
    
    let toEmails;
    const handleSubmit = async (e: { preventDefault: () => void }) => {
      e.preventDefault();
      try {
        const response = await axios.get("app/api/hobby");
        console.log(response);
        toEmails = response.data.arr.join()
      } catch (err) {
        console.log(err);
      }
    };
    
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
        to: toEmails, // list of receivers
        subject: "Test", // Subject line
        text: `hewwo`, // plain text body
        html: `<b>hewwo</b>`, // html body
      });
})();