module.exports = function Task(gulp,path,plugins,config){
  gulp.task('clean',function(){
      return plugins.del(path.dest.css,{force:true}); 
  });

   // gulp.task('copy',['copy:css']);
};
