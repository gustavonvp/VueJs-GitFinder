require('babel-register')
var config = require('../../config')

// http://nightwatchjs.org/gettingstarted#settings-file
module.exports = {
  src_folders: ['test/e2e/specs'],
  output_folder: 'test/e2e/reports',
  custom_assertions_path: ['test/e2e/custom-assertions'],
  
  selenium: {
    start_process: true,
    server_path: require('selenium-server-standalone-jar').path,
    host: 'localhost',
    port: 4445,
  },

  test_settings: {
    start_process: true,
    default: {
      selenium_port: 4445,
      selenium_host: 'localhost',
      silent: false,
      globals: {
        devServerURL: 'http://localhost:' + (process.env.PORT || config.dev.port)
      },
      desiredCapabilities: {
        browserName: "firefox",
        marionette: true
        }
      
    },

  

    firefox: {
      start_process: true,
      desiredCapabilities: {
        browserName: 'firefox',
        javascriptEnabled: true,
        acceptSslCerts: true
      }
    }
  }
}
