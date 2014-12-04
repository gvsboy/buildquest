module.exports = function(grunt) {

  var path = require('path'),
      pkg = grunt.file.readJSON('package.json');

  grunt.initConfig({

    pkg: pkg,

    sass: {
      options: {
        style: 'expanded'
      },
      dist: {
        files: {
          'tmp/main.css': 'src/scss/main.scss'
        }
      },
      public: {
        files: {
          'tmp/main.css': 'server/src/scss/main.scss'
        }
      }
    },

    concat: {
      dist: {
        files: {
          'dist/index.html': 'src/html/**/*.html',
          'dist/css/main.css': ['tmp/lib.css', 'tmp/main.css']
        }
      },
      public: {
        files: {
          'server/public/index.html': 'server/src/html/index.html',
          'server/public/css/main.css': ['tmp/lib.css', 'tmp/main.css']
        }
      }
    },

    bower_concat: {
      css: {
        dest: 'tmp/lib.css',
        mainFiles: {
          'animate.css': 'animate.min.css',
          'pure': 'pure-min.css',
          'fontawesome': 'css/font-awesome.min.css'
        },
        include: [
          'animate.css',
          'pure',
          'fontawesome'
        ]
      }
    },

    copy: {
      dist: {
        cwd: 'bower_components/fontawesome/fonts/',
        src: ['**'],
        dest: 'dist/fonts/',
        expand: true
      },
      public: {
        cwd: 'bower_components/fontawesome/fonts/',
        src: ['**'],
        dest: 'server/public/fonts/',
        expand: true
      }
    },

    clean: {
      dist: 'dist',
      tmp: 'tmp',
      public: 'server/public'
    },

    watch: { 
      dist: {
        files: ['src/**/*'],
        tasks: ['build:dist'],
        options: {
          livereload: true
        }
      },
      public: {
        files: ['server/src/**/*'],
        tasks: ['build:public'],
        options: {
          livereload: true
        }
      },
    },

    browserify: {
      options: {
        transform: [require('grunt-react').browserify]
      },
      dist: {
        files: {
          'dist/js/main.js': 'src/js/app.js'
        }
      },
      public: {
        files: {
          'server/public/js/main.js': 'server/src/js/app.js'
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
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-bower-concat');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-react');
  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-express');

  // Detault task.
  grunt.registerTask('default', 'build:dist');

  // Task to generate the game.
  grunt.registerTask('build:dist', [
    'clean:dist',
    'sass:dist',
    'bower_concat:css',
    'concat:dist',
    'browserify:dist',
    'copy:dist',
    'clean:tmp'
  ]);

  // Task to generate assets for the server app.
  grunt.registerTask('build:public', [
    'clean:public',
    'sass:public',
    'bower_concat:css',
    'concat:public',
    'browserify:public',
    'copy:public',
    'clean:tmp'
  ]);

  // Task to generate all the responsive images.
  grunt.registerTask('img', [
    'responsive_images'
  ]);

  // Task to start and persist the build server.
  grunt.registerTask('server', [
    'express',
    'express-keepalive'
  ]);

};
