'use strict';

const gulp = require('gulp');
const webpack = require('gulp-webpack');

gulp.task('webpack', () => {
  const config = require('../webpack.config.js');

  return gulp.src('public/scripts/app.js')
    .pipe(webpack(config))
    .pipe(gulp.dest('public/'));
});
