// This is a karma config file. For more details see
//   http://karma-runner.github.io/0.13/config/configuration-file.html
// we are also using it with karma-webpack
//   https://github.com/webpack/karma-webpack
process.env.CHROME_BIN = require('puppeteer').executablePath()
//const { path } = require('karma-phantomjs-launcher');
//process.env.PHATOMJS_BIN = require('karma-phantomjs-launcher').executablePath()
var webpackConfig = require('../../build/webpack.test.conf.js')

module.exports = function karmaConfig (config) {


  config.set({
    // files: [
    //   'src/**/*.js',
    //   'test/**/*.js'
    // ],
    // to run in additional browsers:
    // 1. install corresponding karma launcher
    //    http://karma-runner.github.io/0.13/config/browsers.html
    // 2. add it to the `browsers` array below.
    //browsers: ['ChromeHeadless', 'Firefox'],
    frameworks: ['jasmine', 'mocha'],
    browsers: ['ChromeHeadless',],
    plugins: [
      require('karma-jasmine'),
      require('karma-webpack'),
      require('karma-mocha'),
      require('karma-sourcemap-loader'),
      require('karma-phantomjs-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage'),
      require('karma-chrome-launcher'),
      require('karma-script-launcher'),
      
    ],
    test: /\.js$/,
   // include: path.resolve('./src/'),
    loader: 'istanbul-instrumenter-loader',
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageReporter: {
      
      dir: 'C:\\Users\\gusta\\OneDrive\\Documentos\\GitHub\\VueJs-GitFinder\\build\\reports\\coverage',
      instrumenterOptions: {
        istanbul: { noCompact: true }
      },
      reporters: [
        { type: 'html', subdir: 'C:\\Users\\gusta\\OneDrive\\Documentos\\GitHub\\VueJs-GitFinder\\build\\reports\\report-html' },
        { type: 'lcov', subdir: 'C:\\Users\\gusta\\OneDrive\\Documentos\\GitHub\\VueJs-GitFinder\\build\\reports\\' },
        { type: 'text-summary' },
           // reporters supporting the `file` property, use `subdir` to directly
        // output them in the `dir` directory
        { type: 'coverage', subdir: 'C:\\Users\\gusta\\OneDrive\\Documentos\\GitHub\\VueJs-GitFinder\\build\\reports\\', file: 'cobertura.txt' },
        { type: 'lcovonly', subdir: 'C:\\Users\\gusta\\OneDrive\\Documentos\\GitHub\\VueJs-GitFinder\\build\\reports\\', file: 'report-lcovonly.txt' },
        { type: 'teamcity', subdir: 'C:\\Users\\gusta\\OneDrive\\Documentos\\GitHub\\VueJs-GitFinder\\build\\reports\\', file: 'teamcity.txt' },
        { type: 'text', subdir: 'C:\\Users\\gusta\\OneDrive\\Documentos\\GitHub\\VueJs-GitFinder\\build\\reports\\', file: 'text.txt' },
      ]
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'coverage'],
  
    files: {
    
    pattern: 'test/**/*.test.js', watched: false,
    },
    
     // optionally, configure the reporter
     coverageReporter: {
      type : 'html',
      dir : 'C:\\Users\\gusta\\OneDrive\\Documentos\\GitHub\\VueJs-GitFinder\\build\\reports\\coverage\\'
    },

    preprocessors: {
      // source files, that you wanna generate coverage for
      // do not include tests or libraries
      // (these files will be instrumented by Istanbul)
      //'src/**/*.js': ['webpack'],
      './index.js': ['coverage'],
      'test/**/*.test.js': ['sourcemap'],
    },

    singleRun: true,
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
    //browsers: ['Chrome'],
      // If browser does not capture in given timeout [ms], kill it
    captureTimeout : 160000,
    browserDisconnectTolerance: 0,
    captureConsole: true,
    crossOriginAttribute:true,
    customLaunchers: {
        ChromeHeadlessNoSandbox: {
            base: 'Chrome',
            platform: 'windows',
            flags: [
                "--no-sandbox",
                 // required to run without privileges in Docker
                "--disable-web-security",
                "--disable-gpu",
                "--remote-debugging-port=9222",
                "--disable-web-security",
            ]
        }
    },
  });
};




  
  

