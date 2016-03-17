var processor = require('./pluginsPostcss');

module.exports =  plugins = {
  fs          : require('fs'),
  consolidate : require('gulp-consolidate'),
  lodash      : require('lodash'),
  gulpPostcss : require('gulp-postcss'),
  gulpJade    : require('gulp-jade'),
  glob        : require('gulp-css-globbing'),
  express     : require('express'),
  bs          : require('browser-sync').create(),
  del         : require('del'),
  spritesmith : require('gulp.spritesmith'),
  runSequence : require('run-sequence'),
  processor   : processor
}
