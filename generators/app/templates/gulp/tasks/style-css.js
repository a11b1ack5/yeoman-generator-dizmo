var pkg = require('../package.js');
var gulp = require('gulp'),
    gulp_copy = require('gulp-copy'),
    gulp_sass = require('gulp-sass'),
    gulp_sourcemaps = require('gulp-sourcemaps');

gulp.task('style.css:copy', function () {
    return gulp.src(['src/style/**/*', '!src/style/**/*.scss'])
        .pipe(gulp_copy('build/{0}/style/'.replace('{0}', pkg.name), {
            prefix: 2
        }));
});
gulp.task('style.css', ['style.css:copy'], function () {
    return gulp.src('src/style/*.scss')
        .pipe(gulp_sourcemaps.init())
        .pipe(gulp_sass({outputStyle: 'compressed'})
            .on('error', gulp_sass.logError))
        .pipe(gulp_sourcemaps.write('./'))
        .pipe(gulp.dest('build/{0}/style/'.replace('{0}', pkg.name)));
});