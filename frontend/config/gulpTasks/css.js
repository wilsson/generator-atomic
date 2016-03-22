module.exports = function Task(gulp,path,plugins,config){

  gulp.task('css',function(){
    return gulp.src(path.frontend.css)
      .pipe(plugins.glob({extensions:['.css']}))
      .pipe(plugins.gulpPostcss(plugins.processor))
      .pipe(gulp.dest(path.dest.staticFiles));
  });
};
