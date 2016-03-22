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
runTask('css');
runTask('fonts');

gulp.task('default',['jade', 'css', 'browsersync', 'watch']);
