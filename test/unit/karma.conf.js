// This is a karma config file. For more details see
//   http://karma-runner.github.io/0.13/config/configuration-file.html
// we are also using it with karma-webpack
//   https://github.com/webpack/karma-webpack
process.env.CHROME_BIN = require('puppeteer').executablePath()

var webpackConfig = require('../../build/webpack.test.conf')

module.exports = function karmaConfig (config) {
  
  config.set({
    // to run in additional browsers:
    // 1. install corresponding karma launcher
    //    http://karma-runner.github.io/0.13/config/browsers.html
    // 2. add it to the `browsers` array below.
    //browsers: ['ChromeHeadless', 'Firefox'],
    frameworks: ['jasmine'],
    browsers: ['C:/Program Files/Google/Chrome/Application/chrome.exe'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-script-launcher'),
      require('karma-phantomjs-launcher')
    ],
    
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageReporter: {
      dir: './coverage',
      reporters: [
        { type: 'lcov', subdir: '.' },
        { type: 'text-summary' }
      ]
    },
    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'test/**/*.js': ['browserify']
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],
    files: ['./index.js'],
  
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
    browsers: ['PhantomJS'],
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




  
  

