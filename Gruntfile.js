module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-qunit');

  grunt.initConfig({

    jshint: {
      all: ['Gruntfile.js',
      'VueJs-GitFinder/**/*.js', 'test/**/*.js'
    ],
    options:{
      globals: {
                 jQuery: true,
                 console: true,
                 module: true,
                 document: true
               }
    }
   
  },

  watch: {
    files: ['Gruntfile.js'],
    tasks: ['jshint']
},

concat: {
  dist: {
    src: ['GitFinder/src/main.js', 'GitFinder/my.conf.js'],
    dest: 'GitFinder/build/script.js'
  }
},

uglify: {
  options: {
    banner: '/*!<%= grunt.template.today("dd-mm-yyyy") %> */\n'
  },
  dist: {
    files: {
      'dist/[filename].min.js': ['<%= concat.dist.dest %>']
    }
  }
},
qunit: {
  files: ['test/**/*.html']
},

  //   manifest_json: {
  //       build1: {
  //           options: {
  //               dist: './dist',
  //               files: './package/manifest.json'
  //           }
  //       }
  //   },
  
  //   },
 
  //   jshint: {
  //     files: ['Gruntfile.js', 'src/**/*.js', ],
  //     options: {
  //       // options here to override JSHint defaults
  //      
  //     }
  //   },
  //   watch: {
  //     files: ['<%= jshint.files %>'],
  //     tasks: ['jshint', 'qunit']
  //   }
   });


  
  // grunt.loadNpmTasks('manifest.json');

  // grunt.registerTask('test', ['jshint', 'qunit']);

  // grunt.registerTask('default', ['jshint', 'qunit', 'concat', 'uglify']);

};