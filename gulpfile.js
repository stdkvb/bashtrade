const gulp = require('gulp');
const del = require('del');
const concat = require('gulp-concat');
const watch = require('gulp-watch');
const scss = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const notify = require('gulp-notify');
const plumber = require('gulp-plumber');
const fileinclude = require('gulp-file-include');
browserSync = require('browser-sync').create(),
gulp.task('browser-sync', function() {
  browserSync.init()
});

// Таск для сборки HTML и шаблонов
gulp.task('html', function (callback) {
    return gulp.src('./src/pages/*.html')
        .pipe(plumber({
            errorHandler: notify.onError(function (err) {
                return {
                    title: 'HTML include',
                    sound: false,
                    message: err.message
                }
            })
        }))
        .pipe(fileinclude({
            prefix: '@@'
        }))
        .pipe(gulp.dest('./build/'))
    callback();
});

// Таск для компиляции SCSS в CSS
gulp.task('scss', function (callback) {
    return gulp.src('./src/scss/**/*.scss')
        .pipe(plumber({
            errorHandler: notify.onError(function (err) {
                return {
                    title: 'Styles',
                    sound: false,
                    message: err.message
                }
            })
        }))
        .pipe(sourcemaps.init())
        .pipe(scss())
        .pipe(concat('style.css'))
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 4 versions']
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./build/css/'))
        .pipe(browserSync.stream())
    callback();
});

// Таск для копирование images
gulp.task('copy:img', function (callback) {
    return gulp.src('./src/img/**/*.*')
        .pipe(gulp.dest('./build/img/'));
    callback();
});

// Таск для копирование libs
gulp.task('copy:libs', function (callback) {
    return gulp.src('./src/libs/**/*.*')
        .pipe(gulp.dest('./build/libs/'));
    callback();
});

// Таск для копирование fonts
gulp.task('copy:fonts', function (callback) {
    return gulp.src('./src/fonts/**/*.*')
        .pipe(gulp.dest('./build/fonts/'));
    callback();
});

// Таск для копирования upload
gulp.task('copy:upload', function (callback) {
    return gulp.src('./src/upload/**/*.*')
        .pipe(gulp.dest('./build/upload/'));
    callback();
});

// Таск для копирования js
gulp.task('copy:js', function (callback) {
    return gulp.src('./src/js/*.js')
        .pipe(fileinclude({
            prefix: '@@'
        }))
        .pipe(gulp.dest('./build/js'));
    callback();
});

// // Таск для слежки за файлами
gulp.task('watch', function () {
    watch(['./build/*.html', './build/css/**/*.css' , './build/js/**/*.js'],  gulp.parallel(browserSync.reload));
    watch('./src/scss/**/*.scss', gulp.parallel('scss'));
    watch('./src/pages/**/*.html', gulp.parallel('html'));
    watch('./src/img/**/*.*', gulp.parallel('copy:img'));
    watch('./src/libs/**/*.*', gulp.parallel('copy:libs'));
    watch('./src/fonts/**/*.*', gulp.parallel('copy:fonts'));
    watch('./src/upload/**/*.*', gulp.parallel('copy:upload'));
    watch('./src/js/**/*.*', gulp.parallel('copy:js'));
});

gulp.task('server', function () {
    browserSync.init({
        server: {
            baseDir: "./build/"
        }
    })
});

gulp.task('clean:build', function() {
    return del('./build')
});

gulp.task(
    'default',
    gulp.series(
        gulp.parallel('clean:build'),
        gulp.parallel('scss', 'html', 'copy:img', 'copy:libs', 'copy:fonts',  'copy:upload', 'copy:js'),
        gulp.parallel('server', 'watch')
    ));