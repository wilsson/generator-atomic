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


gulp.task('server',['express','bs','watch']);
gulp.task('default',['fonts','css','copy']);
