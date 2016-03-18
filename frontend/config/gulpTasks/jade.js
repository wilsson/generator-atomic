module.exports = function Task(gulp,path,plugins,config){

	var Lexer = require("./../packages/jade_atomic/lexer.js");
	var Parser = require("./../packages/jade_atomic/parser.js");

	Lexer(plugins.jade.Lexer);
	Parser(plugins.jade.Parser);

	// plugins.jade.Parser.prototype.parseInclude = function(){
	// 	console.log(this);
	// }

  // plugins.jade.Lexer.prototype.code = function () {
    
  //   // console.log(this.input);
  //   console.log('..........................');
  //   console.log(this.input);
  //   console.log('--> ', /^\n\t\+molecule ([a-z]+)\/([a-z]+)/.test(this.input));
  //   console.log('..........................');
  //   var captureVariable   =  /^\n\t\+molecule ([a-z]+)\/([a-z]+)/.exec(this.input);
    
  //   var reTok = function(self, line){
  //     self.consume(line.length);
  //     var 
  //       tok = self.tok('code', line);
  //       tok.escape = false;
  //       tok.buffer = false;
  //     return tok;
  //   }
    
  //   if (captureVariable) {
  //   	console.log(captureVariable[0].replace(/\n\t/,''));
  //     return reTok(this, captureVariable[0].replace(/\n\t/,''));
  //   }
    
  // };

  // plugins.jade.Compiler.prototype.visitCode = function (code) {
  //   console.log('-------------------');
  //   console.log(code.val);
  //   console.log(code.buffer);
  //   console.log(code.block);
  //   console.log('___________________');
  //   var _atomic_pattern = /^\+(molecule|atom|organism) ([a-z]+)\/([a-z]+)/;
		// var _atomic_include = '../$2/$1s/jade/$3.jade';
		// var stringFinal = code.val.replace(_atomic_pattern, 'include ' + _atomic_include);
		// console.log(stringFinal);
  //   this.buffer(stringFinal);
  // };


  gulp.task('jade',function(){
    return gulp.src(path.frontend.jade)
      .pipe(plugins.gulpJade({
      	jade:plugins.jade,
        pretty:true
      }))
      .pipe(gulp.dest(path.backend.jade)); 
  });
};