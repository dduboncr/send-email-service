const nconf = require('nconf');

const path = require('path');

const DEFAULTS = {
  appName: 'send-email-service',
  env: 'development',
  PORT: 5000,
};

nconf
  .env({
    parseValues: true,
  })
  .file({
    file: path.join(__dirname, '../_config.json'),
  });

nconf.defaults(DEFAULTS);

// calculate a few config values
nconf.set('env', nconf.get('NODE_ENV'));
nconf.set('appName', nconf.get('HEROKU_APP_NAME'));
nconf.set('LOG_LEVEL', nconf.get('env') === 'development' ? 'trace' : null);

module.exports = nconf;
