var fs    = require('fs'), 
   gulp   = require('gulp'),
  path    = require('./config/path'),
  plugins = require('./config/plugins'),
  config  = require('./config/config.local');

var tasks = fs.readdirSync('./config/gulpTasks');
tasks.forEach(function(task){
  task = require('./config/gulpTasks/'+task);
  task(gulp,path,plugins,config);
});

gulp.task('server',['express','bs','watch']);