module.exports = function Task(gulp,path,plugins,config){
  gulp.task('browsersync',function(){
    plugins.bs.init({
      server:{
      	baseDir: path.backend.base + '/public/home/'
      }
    });
  });
};