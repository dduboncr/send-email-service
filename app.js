const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const configs = require('./configs');

const PORT = configs.get('PORT');
const indexRouter = require('./routes/index');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);

app.use((req, res, next) => {
  const error = new Error('Not found');
  error.status = 404;
  next(error);
});
app.use((error, req, res) => {
  res.status(error.status || 500).json({
    error: {
      status: error.status || 500,
      message: error.message || 'Internal Server Error',
    },
  });
});
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`send-email-service listening on port ${PORT}!`);
});

module.exports = app;
