'use strict';

var gulp = require('gulp');
var mocha = require('gulp-mocha');
var istanbul = require('gulp-istanbul');

gulp.task('pre-test', function () {
  return gulp.src(['services/**/*.js'])
    .pipe(istanbul())
    .pipe(istanbul.hookRequire());
});

gulp.task('test:server', ['pre-test'], function () {
  return gulp.src(['test/server/**/*.js'])
    .pipe(mocha())
    .pipe(istanbul.writeReports({
      // dir: './reports/server',
      reporters: ['lcov', 'cobertura', 'text-summary'],
      reportOpts: {
        dir: './coverage/service/'
      }
    }));
});
