
/*
 * @path
 *
*/

var Path = {dest:{},frontend:{},backend:{}};
Path.base  			= __dirname + '/../..';
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

/*
 * @path Css
 *
 */

Path.frontend.css  = [
  	Path.frontend.base+'/pages/**/*.css',
	'!'+Path.frontend.base+'/pages/**/**/css/*.css'
];

Path.backend.jade   = Path.backend.base + '/public';


Path.dest.serverFiles  = Path.backend.base + '/public/static';
//Path.dest.css = Path.dest.serverFiles + '/static/';
module.exports = Path; 
