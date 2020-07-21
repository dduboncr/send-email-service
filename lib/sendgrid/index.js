const sgMail = require('@sendgrid/mail');
const configs = require('../../configs');

const SENDGRID_FROM = configs.get('SENDGRID_FROM');

sgMail.setApiKey(configs.get('SENDGRID_API_KEY'));

/**
 * This function use sendgrid api send method to send email.
 * @param {string} message
 * @param {string} to destination address to which email would be send
 * @return {Promise)
 */
const sendemail = (message) => {
  const text = `
  Como te enteraste de nosostros: ${message.text1}
  Como nos calificarias: ${message.text2}
  Experiencia: ${message.text3}
  `;

  const email = {
    to: 'hyl.pizzeria@gmail.com',
    from: SENDGRID_FROM,
    subject: 'Survey',
    text,
  };

  return sgMail.send(email);
};

module.exports = {
  sendemail,
};
