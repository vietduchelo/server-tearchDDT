var gulp = require('gulp'),
    apidoc = require('gulp-apidoc');

gulp.task('apidoc', function (done) {
    apidoc({
        src: '.',
        dest: 'documents/',
        debug: true,
        includeFilters: [".*\\.js$"],
        excludeFilters: ["node_modules/"]
    }, done);
});

gulp.task('default', ['apidoc']);