const gulp = require('gulp');
const concat = require('gulp-concat');

const vendorsScripts = [
    'node_modules/svg4everybody/dist/svg4everybody.min.js',
    'node_modules/slick-carousel/slick/slick.min.js',
    'node_modules/jquery-validation/dist/jquery.validate.min.js',
    'node_modules/jquery-validation/dist/localization/messages_ru.min.js'
];

module.exports = function vendors(cb) {
    return vendorsScripts.length
        ? gulp.src(vendorsScripts)
            .pipe(concat('libs.js'))
            .pipe(gulp.dest('build/static/js/'))
        : cb();
};
