module.exports = function Task(gulp,path,plugins,config){
  gulp.task('watch',function(){
    gulp.watch([path.frontend.jade[0]],['jade',plugins.bs.reload]);
    // gulp.watch([path.frontend.css + '/**/*.css'],['css',plugins.bs.reload]);
  });
};