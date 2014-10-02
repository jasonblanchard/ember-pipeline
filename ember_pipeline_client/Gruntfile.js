module.exports = function(grunt) {

  grunt.initConfig({
    redis: {
      options: {
        prefix:'dev:',
        host: '192.168.59.103'
      },
      default: {
        files: {
          src: ["dist/index.html"]
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-redis');

};
