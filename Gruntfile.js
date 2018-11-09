module.exports = function (grunt) {
   grunt.initConfig({
      uglify: {
         dist: {
            src: ["app/js/**/*.js"],
            dest: "dist/js/build.min.js"
         }
      },
      cssmin: {
         dist: {
            src: ["app/css/**/*.css"],
            dest: "dist/css/style.min.css"
         }
      },
      htmlmin: {
         dist: {
            src: ["app/views/**/*.html", "index.html"],
            dest: "dist",
            expand: true,
            options: {
               removeComments: true,
               collapseWhitespace: true
            }
         }
      },
      copy: {
         dist: {
            expand: true,
            src: [
               "node_modules/angular/angular.min.js",
               "node_modules/angular-route/angular-route.min.js",
               "node_modules/bootstrap/dist/css/bootstrap.min.css",
               "node_modules/bootstrap/dist/js/bootstrap.min.js",
               "node_modules/jquery/dist/jquery.min.js",
               "node_modules/popper.js/dist/popper.min.js",
               "node_modules/@fortawesome/fontawesome-free/css/all.min.css",
               "node_modules/@fortawesome/fontawesome-free/webfonts/*.*",
            ],
            dest: "dist"
         },
         dev: {
            expand: true,
            src: [
               "node_modules/angular/angular.min.js",
               "node_modules/angular-route/angular-route.min.js",
               "node_modules/bootstrap/dist/css/bootstrap.min.css",
               "node_modules/bootstrap/dist/js/bootstrap.min.js",
               "node_modules/jquery/dist/jquery.min.js",
               "node_modules/popper.js/dist/popper.min.js",
               "node_modules/@fortawesome/fontawesome-free/css/all.min.css",
               "node_modules/@fortawesome/fontawesome-free/webfonts/*.*",
               "app/**",
               "index.html"
            ],
            dest: "dist"
         }
      },
      clean: {
         dist: {
            src: ["dist"]
         }
      },
      jshint: {
         options: {
            esversion: 6,
            bitwise: true,
            curly: true,
            asi: false
         },
         all: ["app/js/**/*.js"],
      },
      connect: {
         server: {
            options: {
               port: 8000,
               base: "./dist"
            }
         }
      },
      watch: {
         dist: {
            files: ["app/**/*.js", "app/**/*.css", "app/**/*.html", "index.html"],
         },
         dev: {
            files: ["app/**/*.js", "app/**/*.css", "app/**/*.html", "index.html"],
            tasks: ["refresh"],
            options: {
               spawn: false,
               livereload: true
            }
         }
      }
   });

   // CARREGAR PLUGINS
   grunt.loadNpmTasks('grunt-contrib-uglify-es');
   grunt.loadNpmTasks('grunt-contrib-htmlmin');
   grunt.loadNpmTasks('grunt-contrib-connect');
   grunt.loadNpmTasks('grunt-contrib-cssmin');
   grunt.loadNpmTasks('grunt-contrib-jshint');
   grunt.loadNpmTasks('grunt-contrib-watch');
   grunt.loadNpmTasks('grunt-contrib-clean');
   grunt.loadNpmTasks('grunt-contrib-copy');

   // TAREFAS
   grunt.registerTask("default", ["jshint", "clean", "copy:dev", "connect", "watch:dev"])
   grunt.registerTask("build", ["jshint", "clean", "uglify", "cssmin", "htmlmin", "copy:dist", "connect", "watch:dist"]);
   grunt.registerTask("refresh", ["jshint", "clean", "copy:dev"]);
}