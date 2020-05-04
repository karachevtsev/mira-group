const gulp = require('gulp');

module.exports = function copy() {
    return gulp.src(['src/files/*.*','src/files/.htaccess'])
        .pipe(gulp.dest('build'))
};