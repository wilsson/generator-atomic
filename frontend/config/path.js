
/*
 * @path
 *
*/

var 
Path 								= {};
Path.frontend 			= {};
Path.backend				= {};
Path.base  					= __dirname + '/../..';
Path.frontend.base 	= Path.base + '/frontend';
Path.backend.base  	= Path.base + '/backend';


/*
 * @path Jade
 *
*/
Path.frontend.jade  = [
  Path.frontend.base+'/pages/**/*.jade',
  '!'+Path.frontend.base+'/pages/**/**/jade/*.jade'
];
Path.backend.jade   = Path.backend.base + '/public';

/*
 * @path Css
 *
*/


module.exports = Path; 
