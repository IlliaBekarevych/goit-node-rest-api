const sgMail = require("@sendgrid/mail");
const { VERIFICATE_KEY } = process.env;
sgMail.setApiKey(VERIFICATE_KEY);

const sendEmail = async (data) => {
  const mail = { ...data, from: "illiabekarevych@gmail.com" };
  await sgMail.send(mail);
  return true;
};

module.exports = sendEmail;

// const mail = {
//   to: "ilya_bekarevich@ukr.net", // Change to your recipient
//   from: "illiabekarevych@gmail.com", // Change to your verified sender
//   subject: "Sending with SendGrid is Fun",
//   text: "Подтверждение email",
//   html: `<a href= "http://localhost:3000/api/users/verify/verificationToken"> Confirm email</a>`,
// };
// sgMail
//   .send(mail)
//   .then(() => {
//     console.log("Email sent");
//   })
//   .catch((error) => {
//     console.error(error);
//   });
