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
const sendemail = (message, to) => {
  const email = {
    to,
    from: SENDGRID_FROM,
    subject: 'Sending with Twilio SendGrid is Fun',
    text: message,
  };

  return sgMail.send(email);
};

module.exports = {
  sendemail,
};
