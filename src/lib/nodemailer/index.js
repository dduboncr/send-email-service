const nodemailer = require('nodemailer');
const configs = require('../../configs');

const ETHEREAL_FROM = configs.get('ETHEREAL_FROM');
const ETHEREAL_HOST = configs.get('ETHEREAL_HOST');
const ETHEREAL_USER = configs.get('ETHEREAL_USER');
const ETHEREAL_PASS = configs.get('ETHEREAL_PASS');

const transporter = nodemailer.createTransport({
  host: ETHEREAL_HOST,
  port: 587,
  auth: {
    user: ETHEREAL_USER,
    pass: ETHEREAL_PASS,
  },
});

const mailOptions = {
  from: ETHEREAL_FROM,
  to: ETHEREAL_FROM,
  subject: 'Survey',
};

const sendemail = (message) => {
  const text = `
    Como te enteraste de nosostros: ${message.text1}
    Como nos calificarias: ${message.text2}
    Experiencia: ${message.text3}
    `;
  mailOptions.text = text;
  return transporter.sendMail(mailOptions);
};

module.exports = {
  sendemail,
};
