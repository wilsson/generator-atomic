module.exports = function Task(gulp,path,plugins,config){
  var setGlobalVariables = function (req){
      var oP = {};
      oP.version    = new Date().getTime();
      oP.section    = req.params.section;
      oP.baseUrl    = "http://" + req.headers.host;
      oP.staticUrl  = oP.baseUrl + "/";
      oP.elementUrl = oP.baseUrl;
      return oP;
    };

  gulp.task('express',function(){
    var app = plugins.express();
    app.set('view engine','jade');
    app.set('views', path.dest.serverFiles);

    app.use(plugins.express.static(path.dest.serverFiles));
    // for index
    app.get('/',function(req,res){
      var jadeGlobals = setGlobalVariables(req);
          jadeGlobals.section = "index";
      res.render(path.frontend.html+'/views/'+jadeGlobals.section,jadeGlobals);
    });

    app.listen('4000',function(){
      console.log('express ready!');
    });
  });
};