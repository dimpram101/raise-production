import nodemailer from "nodemailer";

const mailTransporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  requireTLS: true,
  auth: {
    user: "raiseproduction123@gmail.com",
    pass: process.env.MAIL_PW,
  },
})


// const testlah = async () => {
//   await mailTransporter.sendMail({
//     from: "raiseproduction123@gmail.com",
//     to: "11211028@student.itk.ac.id",
//     subject: "Test",
//     text: "jsdlvusblaurvirublirbuvuliruaeluvabelir"
//   }).then(() => console.log("BErhasil"))
//   .catch(err => console.log(err));
// }

// await testlah();

export default mailTransporter;