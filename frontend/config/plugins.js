var processor = require('./pluginsPostcss');

module.exports =  plugins = {
  gulpPostcss : require('gulp-postcss'),
  glob        : require('gulp-css-globbing'),
  express     : require('express'),
  bs          : require('browser-sync').create(),
  processor   : processor
}