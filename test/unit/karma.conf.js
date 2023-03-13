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
    browsers: ['ChromeHeadless', 'Firefox'],
    frameworks: ['mocha', 'chai-as-promised', 'sinon-chai', "chai", 'webpack'],
    reporters: ['spec', 'coverage'],
    files: [
      // all files ending in ".test.js"
      // !!! use watched: false as we use webpacks watch
      { pattern: 'test/**/*.test.js', watched: false }
    ],

    preprocessors: {
      // add webpack as preprocessor
      'test/**/*.test.js': [ 'webpack' ]
    },
k: webpackConfig,
    webpackMiddleware: {
      noInfo: true
    },
    coverageReporter: {
      dir: './coverage',
      reporters: [
        { type: 'lcov', subdir: '.' },
        { type: 'text-summary' }
      ]
    },
  
  })
}
