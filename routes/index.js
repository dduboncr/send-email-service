const express = require('express');

const router = express.Router();

const { send } = require('./handler.nodeMailer');

router.post('/sendemail', send);

module.exports = router;
