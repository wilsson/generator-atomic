var fs    = require('fs'), 
   gulp   = require('gulp'),
  path    = require('./config/path'),
  plugins = require('./config/plugins'),
  config  = require('./config/config.local');

var tasks = fs.readdirSync('./config/gulpTasks');

//------------
var _i=0;

function runTask(){
  if(_i<tasks.length && !/^_/.test(tasks[_i])){
    var task = require('./config/gulpTasks/'+tasks[_i]);
    task(gulp,path,plugins,config);
    _i++;
    runTask();
  }
  return 1;
};

runTask();

/*
function runTask(task){
  var task = require('./config/gulpTasks/'+task);
  task(gulp,path,plugins,config);
}
runTask('demo');
*/

gulp.task('server',['express','bs','watch']);
gulp.task('default',['fonts','css','copy']);
