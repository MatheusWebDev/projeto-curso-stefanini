module.exports = function (grunt) {

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
            dist: {
                expand: true,
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                src: ['WebContent/app/pages/**/*.html', 'index.html'],
                dest: 'dist'
            }
        },
        clean: {
            dist: {
                src: ['dist']
            }
        },
        connect: {
            server: {
                options: {
                    port: 8000,
                    base: './dist'
                }
            }
        },
        watch: {
            files:  ['WebContent/app/**/*.{js, html, css, jpeg, png, jpg}', 'index.html'],
            tasks: ['atualizar'],
            options: {
                spawn: false,
                livereload: true
            }
        }
        
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', [
        'clean:dist', 'concat:dist', 'uglify:dist', 
        'cssmin:dist', 'htmlmin:dist', 'connect:server', 'watch']);

    grunt.registerTask('atualizar', [
        'clean:dist', 'concat:dist', 'uglify:dist', 
        'cssmin:dist', 'htmlmin:dist']);

};