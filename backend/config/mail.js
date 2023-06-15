import nodemailer from "nodemailer";

const mailTransporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  requireTLS: true,
  auth: {
    user: "raiseproductions23@gmail.com",
    pass: process.env.MAIL_PW,
  },
})


// const testlah = async () => {
//   await mailTransporter.sendMail({
//     from: "raiseproductions23@gmail.com",
//     to: "",
//     subject: "Test",
//     text: "Ini hanya sebua tes untuk membuktikan jsdlvusblaurvirublirbuvuliruaeluvabelir"
//   }).then(() => console.log("BErhasil"))
//   .catch(err => console.log(err));
// }

// await testlah();

export default mailTransporter;