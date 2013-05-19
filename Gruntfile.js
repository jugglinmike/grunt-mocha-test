/*global module:false*/
module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-jshint');

  // Add our custom tasks.
  grunt.loadTasks('tasks');

  // Project configuration.
  grunt.initConfig({
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        node: true,
        strict: false,
        globals: {
          describe: false,
          it: false
        }
      },
      all: {
        src: ['grunt.js', 'tasks/**/*.js', 'test/**/*.js']
      }
    },
    mochaTest: {
      options: {
        reporter: 'nyan',
        require: 'test/common'
      },
      all: {
        src: ['test/tasks/**/*.js']
      }
    },
  });

  // Default task.
  grunt.registerTask('default', ['jshint', 'mochaTest']);
};
