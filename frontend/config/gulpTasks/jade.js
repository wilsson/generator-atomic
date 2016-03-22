module.exports = function Task(gulp,path,plugins,config){

  gulp.task('jade',function(){
    return gulp.src(path.frontend.jade)
      .pipe(plugins.gulpJade({
        jade:plugins.jadeAtomic({
          basePath:path.frontend.base,
          fileStructure:'/pages/[module]/[atomic]s/jade/[file].jade'
        }),
        pretty:true
    }))
      .pipe(gulp.dest(path.dest.jade));
  });
};
