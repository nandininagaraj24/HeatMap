
module.exports = function (grunt) {

    grunt.initConfig({
        concat: {
            basic: {
                files: {
                    'dist/combined.js': ['res/js/*.js'],
                    'dist/combined.css': ['res/css/*.css']
                }
            },
        }
    });

    grunt.registerTask('build', [
        'concat'
    ]);

    require('load-grunt-tasks')(grunt);
};