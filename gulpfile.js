var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    cleanCSS = require('gulp-clean-css'),
    rename = require('gulp-rename');

gulp.task('scripts', function(){
    gulp.src('dev/js/index.js')
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('assets/js'))
});

gulp.task('sass', function(){
    gulp.src('dev/sass/app.scss')
        .pipe(sass())
        .pipe(gulp.dest('dev/sass'))
        .pipe(cleanCSS())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('assets/css'));
});

gulp.task('watch', function(){
    gulp.watch('dev/sass/*.scss', ['sass']);
    gulp.watch('dev/js/*.js', ['scripts']);
});

gulp.task('default', ['scripts', 'sass', 'watch']);