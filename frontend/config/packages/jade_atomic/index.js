var Lexer = require("./libs/lexer.js");
var Parser = require("./libs/parser.js");

module.exports = function(opt){
	var jadeInstance = opt.jade || require('jade');
	Lexer(jadeInstance.Lexer);
	Parser(jadeInstance.Parser, opt.path);
	return opt.jade;
}