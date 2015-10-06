var express = require('express');
var content;
var fs = require('fs');

var app = express.createServer(express.logger());

app.use('/img', express.static(__dirname + '/img'));
app.use('/css', express.static(__dirname + '/css'));
app.use('/js', express.static(__dirname + '/js'));
app.use('/less', express.static(__dirname + '/less'));
app.use('/fonts', express.static(__dirname + '/fonts'));
app.use('/font-awesome', express.static(__dirname + '/font-awesome'));

app.get('/', function(request, res){
  content = fs.readFileSync('./index.html').toString();
  res.send(content);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
