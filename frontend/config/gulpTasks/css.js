module.exports = function Task(gulp,path,plugins,config){
  var cssFiles = [
    path.frontend.css+'/**/*.css',
    '!'+path.frontend.css+'/**/_**/*.css'
  ];

  gulp.task('css',function(){
    return gulp.src(cssFiles)
      .pipe(plugins.glob({extensions:['.css']}))
      .pipe(plugins.gulpPostcss(plugins.processor))
      .pipe(gulp.dest(path.dest.css)); 
  });
};