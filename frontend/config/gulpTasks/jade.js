module.exports = function Task(gulp,path,plugins,config){

  gulp.task('jade',function(){
    return gulp.src(path.frontend.jade)
      .pipe(plugins.gulpJade({
      	jade:plugins.jadeAtomic({path:path.frontend.base,jade:plugins.jade}),
        pretty:true
      }))
      .pipe(gulp.dest(path.backend.jade)); 
  });
};