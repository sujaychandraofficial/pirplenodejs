var http=require('http');
var url=require('url');

var server=http.createServer(function(req,res){
  var parseurl=url.parse(req.url,true);
  var path=parseurl.pathname;
  var trimmedpath=path.replace(/^\/+|\/+$/g,'');

  if(trimmedpath=='hello'){
    var stringdata=JSON.stringify('hello every one learning from the best course on node js in the world');
    res.writeHead(200);
    res.end(stringdata);
  }
});
server.listen(3000,function(){
  console.log('server running on port 3000');
});
