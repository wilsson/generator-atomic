module.exports = function Task(gulp,path,plugins,config){
  gulp.task('sprites:compile', function () {
    var spriteData = gulp.src(path.frontend.images + '/_sprite/*.png')
      .pipe(plugins.spritesmith({
        algorithm: 'binary-tree',
        imgName: 'main_sprite.png',
        cssName: '_main_sprite.css',
        cssTemplate : path.frontend.images + '/_sprite/_template/css.template.handlerbars'
      }));

    // Genera archivo sprite
    var imgStream = spriteData.img.pipe(gulp.dest(path.frontend.images));

    // Genera archivo .css
    var cssStream = spriteData.css.pipe(gulp.dest(path.frontend.base + '/pages/all'));
    return spriteData;
  });

  /**
   * Tarea principal
   * (gulp sprites)
   */

 gulp.task('sprites', function(cb){
    plugins.runSequence('sprites:compile', 'copy', 'css', cb)
 });
};
