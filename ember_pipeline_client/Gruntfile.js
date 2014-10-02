module.exports = function(grunt) {

  grunt.initConfig({
    redis: {
      options: {
        prefix:'',
        host: ''
      },
      dev: {
        options: {
          prefix:'dev:',
          host: '192.168.59.103'
        },
        files: {
          src: ["dist/index.html"]
        }
      },
    }
  });

  grunt.loadNpmTasks('grunt-redis');
  
  grunt.registerTask('deploy:dev', ['redis:dev']);

};
