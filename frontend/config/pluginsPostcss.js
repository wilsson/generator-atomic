var functions  = require('postcss-functions')({
    functions:{
      list:function(list,index){
        var res = list.split(' ');
        return res[index];
      }
    }
});

module.exports = processor = [
  require('postcss-import'),
  require('postcss-clearfix'),
  require('postcss-sassy-mixins'),
  require('postcss-each'),
  require('postcss-simple-vars'),
  functions,
  require('lost'),
  /* - - - - */
  require('cssnano'),
  require('autoprefixer'),
  require('postcss-media-minmax')
];
