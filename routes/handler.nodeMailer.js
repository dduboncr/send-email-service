const { ok } = require('assert');
const { sendemail } = require('../lib/sendgrid');

const sendEmail = async (req, res) => {
  const { message, to } = req.body;

  ok(message, 'message field required');
  ok(to, 'to field required');

  try {
    const result = await sendemail(message, to);
    res.json({ result });
  } catch (error) {
    res.json({ error: error.message });
  }
};

module.exports = {
  sendEmail,
};
