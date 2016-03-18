//features to override in Jade.Parser
var overrideParser =  function( parserInstance, nodeInstance ){
    var _superParseExpr = parserInstance.prototype.parseExpr;

    parserInstance.prototype.parseincludedAtomic = function(){
      var tok = this.expect('atomicInclude');
      var node;
      var body = this.peek();
      console.log(body);
      console.log(tok.val);
      var chunks = tok.val;

      // return 'include ../all/molecules/jade/head.jade';
      return new nodeInstance.Code('include ../all/molecules/jade/head.jade', true, false);
      // return 'p hola';
    };

    parserInstance.prototype.parseExpr = function(){
        if ( this.peek().type == "atomicInclude") {
            return this.parseincludedAtomic();
        } else {
            return _superParseExpr.call(this);
        };
    };
};
module.exports = overrideParser;