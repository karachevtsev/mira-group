const gulp = require('gulp');

// Копируем все шрифты из папки src в build

module.exports = function fonts() {
  return gulp.src('src/static/fonts/**/*.*')
    .pipe(gulp.dest('build/static/fonts'))
};
