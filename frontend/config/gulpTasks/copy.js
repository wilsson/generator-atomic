module.exports = function Task(gulp,path,plugins,config){
  var pathCopyFontsFiles = [
    path.frontend.fonts+'/**/*.*',
    '!'+path.frontend.fonts+'/_**/*.*',
  ];
  gulp.task('copy:fonts',function(){
    //console.log(pathCopyFontsFiles,'<<<');
    //console.log(path.dest.serverFiles,'<<<<');
    return gulp.src(pathCopyFontsFiles)
      .pipe(gulp.dest(path.dest.staticFiles+'/fonts'));
  });
/*
  gulp.task('copy:img:sprites',function(){
  return gulp.src(path.frontend.images +  '/*_sprite.png')
    .pipe(gulp.dest(path.dest.img));
  });
*/
  gulp.task('copy',['copy:fonts']);
};
