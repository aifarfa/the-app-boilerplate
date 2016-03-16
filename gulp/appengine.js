'use strict';

const gulp = require('gulp');
const childProcess = require('child_process');
const dirSync = require('gulp-directory-sync');
const http = require('http');
const shell = require('gulp-shell');
const wait = require('gulp-wait');

gulp.task('sync', () => {
  const appJson = require('../app.json');
  return gulp.src('')
    .pipe(dirSync('./', 'C:/eae/data/1.0.9.6702/apps/' + appJson.name + '/' + appJson.version + '/', {
      printSummary: true,
      ignore: ['.git', 'node_modules']
    }));
    // .pipe(dirSync('./node_modules/aaa-admin-api/', 'C:/eae/data/1.0.9.6702/apps/' + appJson.name + '/' + appJson.version + '/node_modules/aaa-admin-api/', {
    //   printSummary: true
    // }));
});

gulp.task('appengine:stop', () => {
  const options = {
    ignoreErrors: true
  };

  shell.task([
    'c:/eae/tools/eae.exe --stop',
    'taskkill /F /IM TR.AppServer.exe'
  ], options);

});

gulp.task('appengine:start', ['appengine:stop'], () => {
  childProcess.spawn('c:/eae/tools/eae.exe', ['--start'], {
    stdio: 'inherit'
  });
  return gulp.src('').pipe(wait(1000));
});

gulp.task('recycle', () => {
  const options = {
    host: 'localhost',
    port: 10040,
    path: '/admin/recycle',
    method: 'GET'
  };
  const req = http.request(options);
  req.setTimeout(1000, () => {
    req.abort();
  });
  req.on('error', () => {});
  req.end();
});
