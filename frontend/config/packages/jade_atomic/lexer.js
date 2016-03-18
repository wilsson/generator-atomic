//features to override in Jade.Lexer
var overrideLexer =  function(lexerInstance){
  /**
   * Block interpolation.
   */
   lexerInstance.prototype.atomicInclude = function(){
    console.log(this.input);
    console.log('_____');
     var regexSyntaxCode = /^\@(atom|molecule|organism) ([a-z]+)\/([a-z]+)/;
     var captures = regexSyntaxCode.exec(this.input);
       if ( captures !== null) {
       this.consume(captures[0].length - 1);
       
       var tok = this.tok('atomicInclude', captures);
       this.pipeless = true;
       this.buffer = true;
       console.log(tok);
       return tok;
     }
   };

   var _superNext = lexerInstance.prototype.next;
   lexerInstance.prototype.next = function(){
       return this.atomicInclude() || _superNext.call(this);
   };

};
module.exports = overrideLexer;