'use strict';

const gulp = require('gulp');
const karma = require('karma');
const path = require('path');

gulp.task('test:client', (done) => {
  const options = {
    configFile: path.resolve('./test/karma.conf.js'),
    singleRun: true
  };
  new karma.Server(options, done).start();
});
