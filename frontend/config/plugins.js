var processor = require('./pluginsPostcss');

module.exports =  plugins = {
  fs          : require('fs'),
  consolidate : require('gulp-consolidate'),
  lodash      : require('lodash'),
  gulpPostcss : require('gulp-postcss'),
  glob        : require('gulp-css-globbing'),
  express     : require('express'),
  bs          : require('browser-sync').create(),
    del         : require('del'),
  processor   : processor
}
