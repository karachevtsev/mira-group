const gulp = require('gulp');

module.exports = function fonts() {
    return gulp.src('src/files/*.*')
        .pipe(gulp.dest('build'))
};