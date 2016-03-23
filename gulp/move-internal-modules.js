'use strict';

const gulp = require('gulp');
const del = require('del');

gulp.task('move', ['copy'], function () {
  // You can use multiple globbing patterns as you would with `gulp.src`
  return del(['./node_modules/aaa-admin-api']);
});

gulp.task('copy', function () {
  return gulp
    .src('./node_modules/aaa-admin-api/**/*')
    .pipe(gulp.dest('internal_modules/aaa-admin-api'));
});
