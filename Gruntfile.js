module.exports = function(grunt) {

  var path = require('path'),
      pkg = grunt.file.readJSON('package.json');

  grunt.initConfig({

    pkg: pkg,

    sass: {
      dist: {
        options: {
          style: 'expanded'
        },
        files: {
          'dist/css/main.css': 'src/scss/main.scss'
        }
      }
    },

    concat: {
      html: {
        src: 'src/html/**/*.html',
        dest: 'dist/index.html'
      }
    },

    bower_concat: {
      js: {
        dest: 'dist/js/lib.js',
        mainFiles: {
          'jquery': 'dist/jquery.min.js',
          'lodash': 'dist/lodash.min.js',
          'fiber': 'src/fiber.min.js'
        },
        include: [
          'jquery',
          'lodash',
          'fiber'
        ]
      },
      css: {
        dest: 'dist/css/lib.css',
        mainFiles: {
          'animate.css': 'animate.min.css',
          'pure': 'pure-min.css'
        },
        include: [
          'animate.css',
          'pure'
        ]
      }
    },

    clean: {
      dist: 'dist'
    },

    watch: { 
      scripts: {
        files: ['src/**/*'],
        tasks: ['default'],
        options: {
          livereload: true
        }
      }
    },

    browserify: {
      dist: {
        files: {
          'dist/js/main.js': 'src/js/app.js'
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-bower-concat');
  grunt.loadNpmTasks('grunt-browserify');

  grunt.registerTask('default', [
    'clean',
    'sass',
    'concat',
    'bower_concat:js',
    'bower_concat:css',
    'browserify:dist'
  ]);

};
