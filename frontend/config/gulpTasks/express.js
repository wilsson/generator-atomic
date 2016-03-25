var pathNode = require('path');
module.exports = function Task(gulp,path,plugins,config){
  gulp.task('express',function(){
    var app = plugins.express();
    app.set('view engine','jade');
    app.set('views', path.backend.base);

    app.use(plugins.express.static(path.backend.base+'/public'));
    app.get('/',function(req,res){
      res.sendFile(pathNode.resolve(path.backend.base+'/public/home/index.html'));
    });

    app.listen('4000',function(){
      console.log(pathNode.resolve);
      console.log('express ready!');
    });
  });
};
