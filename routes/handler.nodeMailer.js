const { ok } = require('assert');
const { sendemail } = require('../lib/sendgrid');

const send = async (req, res) => {
  const { message, to } = req.body;

  try {
    ok(message, 'message field required');
    ok(to, 'to field required');

    const result = await sendemail(message, to);
    res.json({ result });
  } catch (error) {
    res.json({ error: error.message });
  }
};

module.exports = {
  send,
};
