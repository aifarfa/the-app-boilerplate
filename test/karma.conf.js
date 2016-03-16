// Karma configuration
// var istanbul = require('browserify-istanbul');
// const path = require('path');

module.exports = function (config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '../',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha'],


    // list of files / patterns to load in the browser
    files: [
      'public/scripts/app.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'test/client/**/*test.js'
    ],

    //
    webpack: {
      devtool: 'inline-source-map'
      // module: {
      //   preLoaders: [
      //     // instrument only testing sources with Istanbul
      //     {
      //       test: /\.js$/,
      //       include: path.resolve('public/scripts/'),
      //       loader: 'istanbul-instrumenter'
      //     }
      //   ]
      // }
    },

    webpackMiddleware: {
      // webpack-dev-middleware configuration
      // i. e.
      noInfo: true
    },

    // list of files to exclude
    exclude: [],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'public/scripts/**/*.js': ['webpack', 'sourcemap', 'coverage'],
      'test/client/**/*test.js': ['webpack']
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'coverage'],

    coverageReporter: {
      dir: 'coverage/client/',
      // includeAllSources: true,
      // instrumenterOptions: {
      //   istanbul: {
      //     noCompact: true
      //   }
      // },
      reporters: [{
        type: 'cobertura',
        subdir: '.',
        file: 'cobertura-client.xml'
      }]
      // type: 'text'
    },


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultanous
    concurrency: Infinity
  });
};
