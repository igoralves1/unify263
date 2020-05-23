//
// Gulpfile
//

"use strict";

const gulp           = require('gulp');
const sass           = require('gulp-sass');
const autoprefixer   = require('gulp-autoprefixer');
const njkRender      = require('gulp-nunjucks-render');
const htmlPrettify   = require('gulp-html-prettify');
const rtlcss         = require('gulp-rtlcss');
const rename         = require('gulp-rename');

var locOnePages      = ['accounting', 'agency', 'app', 'architecture', 'business', 'charity', 'construction', 'consulting', 'corporate', 'courses', 'event', 'gym', 'lawyer', 'music', 'photography', 'real-estate', 'restaurant', 'shipping', 'spa', 'travel', 'wedding'];

var locMultiPages    = ['education', 'marketing', 'real-estate'];



//
// Gulp plumber error handler - displays if any error occurs during the process on your command
//

function errorLog(error) {
  console.error.bind(error);
  this.emit('end');
}



//
// Main
//

function sass_main() {
  return gulp
    .src('./html/assets/include/scss/**/*.scss')
    .pipe(sass({ outputStyle: 'expanded' }))
    .on('error', sass.logError)
    .pipe(autoprefixer([
      "last 1 major version",
      ">= 1%",
      "Chrome >= 45",
      "Firefox >= 38",
      "Edge >= 12",
      "Explorer >= 10",
      "iOS >= 9",
      "Safari >= 9",
      "Android >= 4.4",
      "Opera >= 30"], { cascade: true }))
    .pipe(gulp.dest('./html/assets/css/'));
}

function njk_main() {
  return gulp
    .src('./html/assets/include/nunjucks/pages/**/*.njk')
    .pipe(njkRender())
    .pipe(htmlPrettify({
      indent_size: 2
    }))
    .pipe(gulp.dest('./html/'));
}



//
// Admin
//

function sass_admin() {
  return gulp
    .src('./html/admin-template/assets/include/scss/**/*.scss')
    .pipe(sass({ outputStyle: 'expanded' }))
    .on('error', sass.logError)
    .pipe(autoprefixer([
      "last 1 major version",
      ">= 1%",
      "Chrome >= 45",
      "Firefox >= 38",
      "Edge >= 12",
      "Explorer >= 10",
      "iOS >= 9",
      "Safari >= 9",
      "Android >= 4.4",
      "Opera >= 30"], { cascade: true }))
    .pipe(gulp.dest('./html/admin-template/assets/css/'));
}

function njk_admin() {
  return gulp
    .src('./html/admin-template/assets/include/nunjucks/pages/**/*.njk')
    .pipe(njkRender())
    .pipe(htmlPrettify({
      indent_size: 2
    }))
    .pipe(gulp.dest('./html/admin-template/'));
}



//
// One Page
//

function sass_op(locOnePages) {
  return gulp
    .src('./html/one-pages/' + locOnePages + '/assets/scss/**/*.scss')
    .pipe(sass({ outputStyle: 'expanded' }))
    .on('error', sass.logError)
    .pipe(autoprefixer([
      "last 1 major version",
      ">= 1%",
      "Chrome >= 45",
      "Firefox >= 38",
      "Edge >= 12",
      "Explorer >= 10",
      "iOS >= 9",
      "Safari >= 9",
      "Android >= 4.4",
      "Opera >= 30"], { cascade: true }))
    .pipe(gulp.dest('./html/one-pages/' + locOnePages + '/assets/css/'));
}
async function get_sass_op() {
  for (var i = 0; i < locOnePages.length; i++) {
    sass_op(locOnePages[i]);
  }
}

function sass_op_rtl(locOnePages) {
  return gulp
    .src('./html/one-pages/' + locOnePages + '/assets/scss/**/*.scss')
    .pipe(sass({ outputStyle: 'expanded' }))
    .on('error', sass.logError)
    .pipe(autoprefixer([
      "last 1 major version",
      ">= 1%",
      "Chrome >= 45",
      "Firefox >= 38",
      "Edge >= 12",
      "Explorer >= 10",
      "iOS >= 9",
      "Safari >= 9",
      "Android >= 4.4",
      "Opera >= 30"], { cascade: true }))
    .pipe(rtlcss())
    .pipe(rename({ suffix: '-rtl' }))
    .pipe(gulp.dest('./html/rtl/one-pages/' + locOnePages + '/assets/css/'));
}
async function get_sass_op_rtl() {
  for (var i = 0; i < locOnePages.length; i++) {
    sass_op_rtl(locOnePages[i]);
  }
}



//
// E-commerce
//

function sass_ec() {
  return gulp
    .src('./html/e-commerce/assets/scss/**/*.scss')
    .pipe(sass({ outputStyle: 'expanded' }))
    .on('error', sass.logError)
    .pipe(autoprefixer([
      "last 1 major version",
      ">= 1%",
      "Chrome >= 45",
      "Firefox >= 38",
      "Edge >= 12",
      "Explorer >= 10",
      "iOS >= 9",
      "Safari >= 9",
      "Android >= 4.4",
      "Opera >= 30"], { cascade: true }))
    .pipe(gulp.dest('./html/e-commerce/assets/css/'));
}

function sass_ec_rtl() {
  return gulp
    .src('./html/e-commerce/assets/scss/**/*.scss')
    .pipe(sass({ outputStyle: 'expanded' }))
    .on('error', sass.logError)
    .pipe(autoprefixer([
      "last 1 major version",
      ">= 1%",
      "Chrome >= 45",
      "Firefox >= 38",
      "Edge >= 12",
      "Explorer >= 10",
      "iOS >= 9",
      "Safari >= 9",
      "Android >= 4.4",
      "Opera >= 30"], { cascade: true }))
    .pipe(rtlcss())
    .pipe(rename({ suffix: '-rtl' }))
    .pipe(gulp.dest('./html/rtl/e-commerce/assets/css/'));
}



//
// Multipages
//

function sass_mp(locMultiPages) {
  return gulp
    .src('./html/multipage/' + locMultiPages + '/assets/scss/**/*.scss')
    .pipe(sass({ outputStyle: 'expanded' }))
    .on('error', sass.logError)
    .pipe(autoprefixer([
      "last 1 major version",
      ">= 1%",
      "Chrome >= 45",
      "Firefox >= 38",
      "Edge >= 12",
      "Explorer >= 10",
      "iOS >= 9",
      "Safari >= 9",
      "Android >= 4.4",
      "Opera >= 30"], { cascade: true }))
    .pipe(gulp.dest('./html/multipage/' + locMultiPages + '/assets/css/'));
}
async function get_sass_mp() {
  for (var i = 0; i < locMultiPages.length; i++) {
    sass_mp(locMultiPages[i]);
  }
}

function sass_mp_rtl(locMultiPages) {
  return gulp
    .src('./html/multipage/' + locMultiPages + '/assets/scss/**/*.scss')
    .pipe(sass({ outputStyle: 'expanded' }))
    .on('error', sass.logError)
    .pipe(autoprefixer([
      "last 1 major version",
      ">= 1%",
      "Chrome >= 45",
      "Firefox >= 38",
      "Edge >= 12",
      "Explorer >= 10",
      "iOS >= 9",
      "Safari >= 9",
      "Android >= 4.4",
      "Opera >= 30"], { cascade: true }))
    .pipe(rtlcss())
    .pipe(rename({ suffix: '-rtl' }))
    .pipe(gulp.dest('./html/rtl/multipage/' + locMultiPages + '/assets/css/'));
}
async function get_sass_mp_rtl() {
  for (var i = 0; i < locMultiPages.length; i++) {
    sass_mp_rtl(locMultiPages[i]);
  }
}



//
// Blog & Magazine
//

function sass_bm() {
  return gulp
    .src('./html/multipage/blog-magazine/classic/assets/scss/**/*.scss')
    .pipe(sass({ outputStyle: 'expanded' }))
    .on('error', sass.logError)
    .pipe(autoprefixer([
      "last 1 major version",
      ">= 1%",
      "Chrome >= 45",
      "Firefox >= 38",
      "Edge >= 12",
      "Explorer >= 10",
      "iOS >= 9",
      "Safari >= 9",
      "Android >= 4.4",
      "Opera >= 30"], { cascade: true }))
    .pipe(gulp.dest('./html/multipage/blog-magazine/classic/assets/css/'));
}

function sass_bm_rtl() {
  return gulp
    .src('./html/multipage/blog-magazine/classic/assets/scss/**/*.scss')
    .pipe(sass({ outputStyle: 'expanded' }))
    .on('error', sass.logError)
    .pipe(autoprefixer([
      "last 1 major version",
      ">= 1%",
      "Chrome >= 45",
      "Firefox >= 38",
      "Edge >= 12",
      "Explorer >= 10",
      "iOS >= 9",
      "Safari >= 9",
      "Android >= 4.4",
      "Opera >= 30"], { cascade: true }))
    .pipe(rtlcss())
    .pipe(rename({ suffix: '-rtl' }))
    .pipe(gulp.dest('./html/rtl/multipage/blog-magazine/classic/assets/css/'));
}

function sass_bootstrap_rtl() {
  return gulp
    .src('./html/assets/vendor/bootstrap/bootstrap.min.css')
    .pipe(sass({ outputStyle: 'expanded' }))
    .on('error', sass.logError)
    .pipe(autoprefixer([
      "last 1 major version",
      ">= 1%",
      "Chrome >= 45",
      "Firefox >= 38",
      "Edge >= 12",
      "Explorer >= 10",
      "iOS >= 9",
      "Safari >= 9",
      "Android >= 4.4",
      "Opera >= 30"], { cascade: true }))
    .pipe(rtlcss())
    .pipe(rename({ suffix: '-rtl' }))
    .pipe(gulp.dest('./html/rtl/assets/vendors/bootstrap/'));
}



//
// Watch
//

function watch() {
  gulp.watch('./html/assets/include/scss/**/*.scss', sass_main);
  gulp.watch('./html/assets/include/nunjucks/**/*.njk', njk_main);

  gulp.watch('./html/admin-template/assets/include/scss/**/*.scss', sass_admin);
  gulp.watch('./html/admin-template/assets/include/nunjucks/**/*.njk', njk_admin);

  gulp.watch('./html/multipage/marketing/assets/scss/**/*.scss', sass_mp);

  gulp.watch('./html/one-pages/charity/assets/scss/**/*.scss', sass_op);
}

// Gulp Tasks
gulp.task('default', gulp.series(watch));

gulp.task('sass_main', sass_main);
gulp.task('njk_main', njk_main);

gulp.task('sass_admin', sass_admin);
gulp.task('njk_admin', njk_admin);

gulp.task('get_sass_op', get_sass_op);
gulp.task('get_sass_op_rtl', get_sass_op_rtl);

gulp.task('sass_ec', sass_ec);
gulp.task('sass_ec_rtl', sass_ec_rtl);

gulp.task('get_sass_mp', get_sass_mp);
gulp.task('get_sass_mp_rtl', get_sass_mp_rtl);

gulp.task('sass_bm', sass_bm);
gulp.task('sass_bm_rtl', sass_bm_rtl);

gulp.task('sass_bootstrap_rtl', sass_bootstrap_rtl);