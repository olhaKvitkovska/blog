/* eslint-disable node/no-unpublished-require */
const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cssnano = require('gulp-cssnano');
const plumber = require('gulp-plumber');
const nodemon = require('gulp-nodemon')
/* eslint-enable node/no-unpublished-require */

function css() {
    return gulp
        .src('./dev/scss/**/*.scss')
        .pipe(plumber())
        .pipe(sass())
        .pipe(
            autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], {
                cascade: true
            })
        )
        .pipe(cssnano())
        .pipe(gulp.dest('public/stylesheets'))

}



gulp.watch('dev/scss/**/*.scss', css);

function nodn() {
    return nodemon({
        script: 'index.js'
    })
}



exports.default = gulp.series(css, nodn);