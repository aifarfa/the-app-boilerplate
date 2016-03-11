const sample = require('./services/sample');

exports.configure = function (app) {
  // register route handlers
  app.get('/who', sample.who);
};
