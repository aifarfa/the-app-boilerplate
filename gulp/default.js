'use strict';

const appJson = require('../app.json');
const browserSync = require('browser-sync');
const gulp = require('gulp');
const run = require('run-sequence');
const watch = require('gulp-watch');

gulp.task('default', (done) => {
  run('test:server', 'test:client', 'webpack', 'sync', 'appengine:start', 'watch', done);
});

gulp.task('watch', () => {
  browserSync.init({
    proxy: 'http://localhost:10030/Apps/' + appJson.name + '/' + appJson.version + '/',
    browser: ['google chrome']
  });


  // HTML changed: HTML should be in the root folder or public folder only
  watch([
    './public/**/*.html',
    './public/css/**/*.css',
    './test/**/*.html'
  ], function (file) {
    run('sync', browserSync.reload);
  });

});
