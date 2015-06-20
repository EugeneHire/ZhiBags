var gulp = require('gulp'),
    sass = require('gulp-sass'),
    minifycss = require('gulp-minify-css'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    livereload = require('gulp-livereload'),
    nodemon = require('nodemon');

gulp.task('sass', function () {
  console.log('compiling!');
  gulp.src('./client/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./client/css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('.client/sass/**/*.scss', ['sass']);
  gulp.watch('.client/sass/*.scss', ['sass']);
  console.log('watching');
});

gulp.task('start', function () {
  nodemon({
    script: 'server.js'
  , ext: 'js html'
  , env: { 'NODE_ENV': 'development' }
  })
});


gulp.task('default', ['start', 'sass:watch']);
