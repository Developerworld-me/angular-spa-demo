module.exports = function (grunt) {
    grunt.registerTask(
        'prod',
        [
            'clean:prod',
            'jshint',
            'jscs',
            'test',
            'less:prod',
            'ngmin:prod',
            'uglify:prod',
            'bowercopy:prod',
            'copy:prod',
            'template:prod',
            'clean:docs',
            'ngdocs'
        ]
    );
};
