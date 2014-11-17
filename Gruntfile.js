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
      options: {
        transform: [require('grunt-react').browserify]
      },
      dist: {
        files: {
          'dist/js/main.js': 'src/js/app.js'
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

  grunt.registerTask('default', [
    'clean',
    'sass',
    'concat',
    'bower_concat:css',
    'browserify:dist'
  ]);

  grunt.registerTask('img', [
    'responsive_images'
  ]);

};
