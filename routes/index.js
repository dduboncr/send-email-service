const express = require('express');

const router = express.Router();

const handler = require('./handler.nodeMailer');

router.post('/', handler.sendemail);

module.exports = router;
