'use strict';

var who = function (context, payload, req, res) {
  res.send(200, {
    uuid: encodeURIComponent(context.user.uuid)
  });
};

exports.configure = function (app) {
  // register route handlers
  app.get('/who', who);
};
