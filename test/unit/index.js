
// import * as vue  from 'vue'
// // require('core-js/shim')
// // require('vue')
// // const vueVue = require('vue');
// // const soShim = require('core-js/shim');


// vue.config.productionTip = false

// // require all test files (files that ends with .spec.js)
// const testsContext = require.context('./specs', true, /\.spec$/)
// testsContext.keys().forEach(testsContext)

// // require all src files except main.js for coverage.
// // you can also change this to match only the subset of files that
// // you want coverage for.
// const srcContext = require.context('../../src', true, /^\.\/(?!main(\.js)?$)/)
// srcContext.keys().forEach(srcContext)


// Basic literal string creation
`This is a pretty little template string.`

// Multiline strings
`In ES5 this is
 not legal.`

// Interpolate variable bindings
var name = "Bob", time = "today";
`Hello ${name}, how are you ${time}?`

// Unescaped template strings
String.raw`In ES5 "\n" is a line-feed.`

// Construct an HTTP request prefix is used to interpret the replacements and construction
GET`http://localhost:9876//bar?a=${a}&b=${b}
    Content-Type: application/json
    X-Credentials: ${credentials}
    Accept-Encoding  = "Accept-Encoding" ":" codings [ ";" "q" "=" qvalue ] )
    codings = ( content-coding | "*" )`;