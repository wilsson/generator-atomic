module.exports = function Task(gulp,path,plugins,config){
    var pathCopyFontsFiles = [
        path.frontend.fonts+'/**/*.*',
        '!'+path.frontend.fonts+'/_**/*.*',
    ];
  gulp.task('copy:css',function(){
      //console.log(pathCopyFontsFiles,'<<<');
      //console.log(path.dest.serverFiles,'<<<<');
      return gulp.src(pathCopyFontsFiles, {base:path.frontend.source})
          .pipe(gulp.dest(path.dest.fonts)); 
  });

    gulp.task('copy',['copy:css']);
};
