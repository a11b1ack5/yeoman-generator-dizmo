var pkg = require('../package.js'),
    path = require('path');
var gulp = require('gulp'),
    gulp_concat = require('gulp-concat');

gulp.task('index.js', function () {
    return gulp.src(['src/index.js'])
        .pipe(gulp_concat('index.js'))
        .pipe(gulp.dest(path.join('build', pkg.name)));
});
