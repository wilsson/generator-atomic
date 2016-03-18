//features to override in Jade.Parser
var overrideParser =  function( parserInstance){
    var fs = require('fs');
    var _superParseExpr = parserInstance.prototype.parseExpr;

    var merge = function(a, b) {
      for (var key in b) a[key] = b[key];
      return a;
    };

    parserInstance.prototype.parseincludedAtomic = function(){
      var tok = this.expect('atomicInclude');
      var body = this.peek();
      var chunks = tok.val;
      
      var path = __dirname + '/../../../../frontend/pages/' + chunks[2] + '/' + chunks[1] + 's/jade/' + chunks[3] + '.jade';
      var str = fs.readFileSync(path, 'utf8');

      var parser = new this.constructor(str, path, this.options);
      parser.dependencies = this.dependencies;

      parser.blocks = merge({}, this.blocks);
      parser.included = true;

      parser.mixins = this.mixins;

      this.context(parser);
      var ast = parser.parse();
      this.context();
      ast.filename = path;
      return ast;
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