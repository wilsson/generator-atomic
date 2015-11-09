module.exports = function Task(gulp,path,plugins,config){
  gulp.task('bs',function(){
    plugins.bs.init({
      proxy: "http://localhost:" + config.port + "/"
    });
  });
};