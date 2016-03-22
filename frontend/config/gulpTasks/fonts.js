module.exports = function Task(gulp,path,plugins,config){
  var dirList = [];
  var fonts = plugins.fs.readdirSync(path.frontend.fonts);
    
  fonts.forEach(function(file){
    if(!/^_/.test(file)){
      dirList.push(file);
    }
  }); 
  console.log('dirList>>>',dirList); 
  gulp.task('fonts',function(){
    return gulp.src(path.frontend.fonts+'/_template/fonts.css')
      .pipe(plugins.consolidate('lodash', { dirList: dirList }))
      .pipe(gulp.dest(__dirname));
  }); 
};
