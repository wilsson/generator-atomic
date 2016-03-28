var fs    = require('fs'),
   gulp   = require('gulp'),
  path    = require('./config/path'),
  plugins = require('./config/plugins'),
  config  = require('./config/config.local');

var tasks = fs.readdirSync('./config/gulpTasks');


function runTask(task){
  var task = require('./config/gulpTasks/'+task);
  task(gulp,path,plugins,config);
}

runTask('jade');
runTask('browsersync');
runTask('watch');
runTask('copy');
runTask('css');
runTask('fonts');
runTask('express');
runTask('sprites');

gulp.task('default',['jade', 'fonts', 'sprites:compile', 'copy', 'css', 'browsersync', 'watch']);
