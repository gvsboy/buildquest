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
          'tmp/main.css': 'src/scss/main.scss'
        }
      }
    },

    concat: {
      html: {
        src: 'src/html/**/*.html',
        dest: 'dist/index.html'
      },
      css: {
        src: ['tmp/lib.css', 'tmp/main.css'],
        dest: 'dist/main.css'
      }
    },

    bower_concat: {
      css: {
        dest: 'tmp/lib.css',
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
      dist: 'dist',
      tmp: 'tmp'
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
      options: {
        transform: [require('grunt-react').browserify]
      },
      dist: {
        files: {
          'dist/main.js': 'src/js/app.js'
        }
      }
    },

    responsive_images: {
      areas: {
        options: {
          quality: 60,
          newFilesOnly: false,//FOR TESTING ONLY! Set to true when options are good.
          sizes: [
            {
              name: 'large',
              width: '320px',
              height: '240px',
              aspectRatio: false
            }
          ]
        },
        files: [{
          expand: true,
          src: ['**.{jpg,gif,png}'],
          cwd: 'data/_src/',
          dest: 'data/images/'
        }]
      }
    },

    express: {
      server: {
        options: {
          debug: true,
          server: path.resolve('./server/app.js')
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
  grunt.loadNpmTasks('grunt-react');
  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-express');

  grunt.registerTask('default', [
    'clean:dist',
    'sass',
    'bower_concat:css',
    'concat',
    'browserify:dist',
    'clean:tmp'
  ]);

  grunt.registerTask('img', [
    'responsive_images'
  ]);

  grunt.registerTask('server', [
    'express',
    'express-keepalive'
  ]);

};
