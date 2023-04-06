// This is a karma config file. For more details see
//   http://karma-runner.github.io/0.13/config/configuration-file.html
// we are also using it with karma-webpack
//   https://github.com/webpack/karma-webpack
process.env.CHROME_BIN = require('puppeteer').executablePath()

var webpackConfig = require('../../build/webpack.test.conf')

module.exports = function karmaConfig (config) {
  
  config.set({
    files: [
      'coverage/**/*.html',
      'specs/**/*.js'
    ],
    // to run in additional browsers:
    // 1. install corresponding karma launcher
    //    http://karma-runner.github.io/0.13/config/browsers.html
    // 2. add it to the `browsers` array below.
    //browsers: ['ChromeHeadless', 'Firefox'],
    frameworks: ['jasmine'],
    //browsers: ['chrome'],
    plugins: [
      require('karma-jasmine'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage'),
      require('karma-chrome-launcher'),
      require('karma-script-launcher'),
      require('karma-phantomjs-launcher'),
      require('karma-webpack'),
      
    ],
    
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageReporter: {
      
      dir: 'build/reports/coverage',
      instrumenterOptions: {
        istanbul: { noCompact: true }
      },
      reporters: [
        { type: 'html', subdir: 'report-html' },
        { type: 'lcov', subdir: '.' },
        { type: 'text-summary' },
           // reporters supporting the `file` property, use `subdir` to directly
        // output them in the `dir` directory
        { type: 'cobertura', subdir: '.', file: 'cobertura.txt' },
        { type: 'lcovonly', subdir: '.', file: 'report-lcovonly.txt' },
        { type: 'teamcity', subdir: '.', file: 'teamcity.txt' },
        { type: 'text', subdir: '.', file: 'text.txt' },
      ]
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'coverage'],
  
    files: ['../../index.html'],
     // optionally, configure the reporter
     coverageReporter: {
      type : 'html',
      dir : 'coverage/'
    },

    preprocessors: {
      // source files, that you wanna generate coverage for
      // do not include tests or libraries
      // (these files will be instrumented by Istanbul)
      'src/**/*.js': ['coverage']
      //'src/**/*.js': ['babel'],
     // 'tests/**/*.spec.js': ['babel'],
    },

    
    babelPreprocessor: {
      options: {
          "presets": ["es2015"]
      }
   },

    singleRun: false,
    concurrency: Infinity,
    restartOnFileChange: true,
    webpack: webpackConfig,
    webpackMiddleware: {
    noInfo: true
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
      // If browser does not capture in given timeout [ms], kill it
      captureTimeout : 60000,
    customLaunchers: {
        ChromeHeadlessNoSandbox: {
            base: 'ChromeHeadless',
            flags: [
                "--no-sandbox",
                 // required to run without privileges in Docker
                "--disable-web-security",
                "--disable-gpu",
                "--remote-debugging-port=9222"
            ]
        }
    },
  });
};




  
  

