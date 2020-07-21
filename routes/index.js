const express = require('express');

const router = express.Router();

const { send } = require('./handler.sendemail');

/**
 * @path /api/vi/sendemail
 * @type application/json
 * @method POST
 * @param {Express.Request} req
 * @param {object} req.body
 * @param {string} req.body.message text used to send message
 * @param {string} req.body.to email address destination which the message would be sent
 * @param {Express.Response} res
 */
router.post('/api/v1/sendemail', send);

module.exports = router;
