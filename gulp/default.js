'use strict';

const appJson = require('../app.json');
const browserSync = require('browser-sync');
const gulp = require('gulp');
const run = require('run-sequence');
const watch = require('gulp-watch');

gulp.task('default', (done) => {
  run('build', 'sync', 'appengine:stop', 'appengine:start', 'watch', done);
});

gulp.task('build', (done) => {
  run('move', 'typescript', 'webpack', done);
});

gulp.task('test', ['test:service', 'test:wct'], (done) => {
  done();
});

gulp.task('watch', () => {
  browserSync.init({
    proxy: 'http://localhost:10030/Apps/' + appJson.name + '/' + appJson.version + '/',
    browser: ['google chrome'],
    reloadDelay: 3000
  });

  // HTML changed: HTML should be in the root folder or public folder only
  watch([
    './index.html',
    './public/**/*.html',
    './public/scripts/bundle.js',
    './public/css/**/*.css',
    './test/**/*.html'
  ], function (file) {
    run(['sync'], browserSync.reload);
  });

  watch([
    './public/scripts/app.js'
  ], function(file){
    run(['webpack']);
  });
});
