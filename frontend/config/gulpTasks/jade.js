module.exports = function Task(gulp,path,plugins,config){

  gulp.task('jade',function(){
    return gulp.src(path.frontend.jade)
      .pipe(plugins.gulpJade({
        pretty:true
      }))
      .pipe(gulp.dest(path.backend.jade)); 
  });
};