module.exports = function Task(gulp,path,plugins,config){
  var dirList = [];
  var fonts = plugins.fs.readdirSync(path.frontend.fonts);
    
  fonts.forEach(function(file){
    if(!/^_/.test(file)){
      dirList.push(file);
    }
  }); 
    
  gulp.task('fonts',function(){
    //console.log(dirList,'distList');
    //console.log(path.frontend.fonts+'/_template/fonts.css');
    //console.log(path.frontend.css+'/layout');
    return gulp.src(path.frontend.fonts+'/_template/fonts.css')
      .pipe(plugins.consolidate('lodash',{dirList:dirList}))
      .pipe(gulp.dest(path.frontend.css+'/layout'));
      //return console.log(dirList);
  }); 
};
