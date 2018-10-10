module.exports = function(grunt) {

    grunt.initConfig({        
        /*jshint: {*/
        //    all: ['WebContent/app/js/**/*.js', '!WebContent/app/js/assets/**/*.js']
        /*},*/

        concat: {
            dist: {
                src: ['WebContent/app/js/**/*.js', '!WebContent/app/js/assets/**/*.js'],
                dest: 'dist/js/build.min.js'
            }
        },
        uglify: {
            dist: {
                src: ['dist/js/build.min.js'],
                dest: 'dist/js/build.min.js'
            }
        },
        cssmin: {
            dist: {
                src: ['WebContent/app/css/**/*.css'],
                dest: 'dist/css/style.min.css'
            }
        },
        htmlmin: {
            dist:{
                expand: true,
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                src: ['WebContent/app/pages/**/*.html'],
                dest: 'dist'
            }
        },
        clean: {
            dist: {
                src: ['dist']
            }
        }


    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask('default', ['clean:dist', 'concat:dist', 'uglify:dist', 'cssmin:dist', 'htmlmin:dist']);
  
  };