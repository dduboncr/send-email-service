const { ok } = require('assert');
const { sendemail } = require('../lib/nodemailer');

const send = async (req, res) => {
  const { message, to } = req.body;

  try {
    ok(message, 'message field required');
    ok(to, 'to field required');

    const result = await sendemail(message, to);
    res.json({ result });
  } catch (error) {
    res.status(error.code).json({
      message: error.message,
    });
  }
};

module.exports = {
  send,
};
