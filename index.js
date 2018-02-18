var express = require('express');
var fs = require('fs');
var bodyParser = require('body-parser');
var app = express();
var playUrl = function (id){
	/*$.ajax('http://api.youtube6download.top/fetch/link.php?i='+id, function (data, status){
		console.log("response recieved");
	});*/
}
app.use('/static', express.static(__dirname+'/templates'));

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.get('/', function (req, res){
	fs.readFile('templates/html/index.html', function(err, data) {
    	res.writeHead(200, {'Content-Type': 'text/html'});
    	res.write(data);
    	return res.end();
  	});
});

app.post('/play', function (req, res){
	var item, i, idsList = req.body.ids;
	console.log("play hit");
	console.log(idsList);
	for(i=0;i<idsList.length;i++){
		item = playUrl(idsList[i]);
	}
});

app.listen(3000);