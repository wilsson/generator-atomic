
/*
 * @path
 *
*/

var Path = {dest:{},frontend:{},backend:{}};
Path.base           = __dirname + '/../..';
Path.frontend.base  = Path.base + '/frontend';
Path.backend.base   = Path.base + '/backend';


/*
 * @path Fonts
 *
 */

Path.frontend.fonts = Path.frontend.base + '/source/fonts';

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
  '!'+Path.frontend.base+'/pages/**/_*.css',
  '!'+Path.frontend.base+'/pages/**/**/css/*.css'
];

/*
 * @path dest jade
 *
 */

Path.dest.jade   = Path.backend.base + '/public';

/*
 * @path dest static
 *
 */

Path.dest.staticFiles  = Path.backend.base + '/public/static';

/*
 * @path Fonts
 *
 */

Path.frontend.images = Path.frontend.base + '/source/images'

module.exports = Path;
