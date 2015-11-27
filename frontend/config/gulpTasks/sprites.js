module.exports = function Task(gulp,path,plugins,config){
  gulp.task('sprites:compile', function () {
    var spriteData = gulp.src(path.frontend.images + '/_sprite/*.png')
      .pipe(plugins.spritesmith({
        algorithm: 'binary-tree',
        imgName: 'main_sprite.png',
        cssName: 'main_sprite.css',
        cssTemplate : path.frontend.images + '/_sprite/_template/css.template.handlerbars'
      }));

    // Genera archivo sprite
    var imgStream = spriteData.img.pipe(gulp.dest(path.frontend.images));

    // Genera archivo .styl
    var cssStream = spriteData.css.pipe(gulp.dest(path.frontend.css + '/layout/_utilities'));
    return spriteData;
  });

  /**
   * Tarea principal
   * (gulp sprites)
   */
  gulp.task('sprites', function(cb){
      plugins.runSequence('sprites:compile','copy:img:sprites','css', cb);
  });
};
