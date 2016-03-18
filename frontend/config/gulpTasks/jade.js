module.exports = function Task(gulp,path,plugins,config){

	var Lexer = require("./../packages/jade_atomic/lexer.js");
	var Parser = require("./../packages/jade_atomic/parser.js");

	Lexer(plugins.jade.Lexer);
	Parser(plugins.jade.Parser);

  gulp.task('jade',function(){
    return gulp.src(path.frontend.jade)
      .pipe(plugins.gulpJade({
      	jade:plugins.jade,
        pretty:true
      }))
      .pipe(gulp.dest(path.backend.jade)); 
  });
};