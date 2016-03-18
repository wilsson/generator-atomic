//features to override in Jade.Lexer
var overrideLexer =  function(lexerInstance){
  /**
   * Block interpolation.
   */
   lexerInstance.prototype.atomicInclude = function(){
     var regexSyntaxCode = /^\+(atom|molecule|organism) ([a-z_]+)\/([a-z_]+)/;
     var captures = regexSyntaxCode.exec(this.input);
       if ( captures !== null) {
       this.consume(captures[0].length);
       
       var tok = this.tok('atomicInclude', captures);
       this.pipeless = false;
       this.buffer = true;
       return tok;
     }
   };

   var _superNext = lexerInstance.prototype.next;
   lexerInstance.prototype.next = function(){
       return this.atomicInclude() || _superNext.call(this);
   };

};
module.exports = overrideLexer;