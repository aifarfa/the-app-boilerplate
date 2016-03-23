'use strict';

var gulp = require('gulp');
var gulpTs = require('gulp-typescript');

gulp.task('typescript', function () {
  var option = {
    'base': './'
  };
  var src = [
    './services/**/*.ts',
    './test/**/*.ts'
  ];
  return gulp.src(src, option)
    .pipe(gulpTs({
      module: 'commonjs',
      noImplicitAny: false,
      removeComments: false
    }))
    .pipe(gulp.dest('./'));
});
