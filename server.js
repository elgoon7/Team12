var express = require('express');
var path = require('path');
var app = express();
var fs = require("fs");
var bodyParser = require('body-parser');

app.set('port', (process.env.PORT || 5000))
app.use('/public',express.static(__dirname+'/public'));
app.use('/css',express.static(__dirname+'/public/css'));
app.use('/js',express.static(__dirname+'/public/js'));
app.use('/images',express.static(__dirname+'/public/images'));
app.use('/fonts',express.static(__dirname+'/public/fonts'));
app.use('/ie',express.static(__dirname+'/public/ie'));
app.use('/css/images',express.static(__dirname+'/public/css/images'));

app.use(bodyParser.json());

// Routes
app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, '/public/index.html'));
});
app.get('/ask',function(req,res){
	res.sendFile(path.join(__dirname,'/public/ask.html'))
});
app.get('/questions',function(req,res){
	res.sendFile(path.join(__dirname,'/public/questions.html'))
});


//Api
app.get('/api/questions',function(req,res){
	//Open the db
	console.log(req.query.name);
	var db = new sqlite3.Database('public/hercules.db');
	db.serialize(function(){
		var stmt = 'SELECT * FROM gym WHERE name="'+req.query.name+'"';
		db.each(stmt,function(err,row){
			res.json(row);
		})
	});
	db.close();
});

app.post('/api/ask',function(req,res){
	var file = __dirname + '/public/data/test.json';
	var dataf;
	fs.readFile(file, 'utf8', function (err, data) {
		if (err) {
			console.log('Error: ' + err);
			return;
		}
		dataf = JSON.parse(data);
		console.log(dataf);
		dataf.data[2] = {"name":req.body.title,"text":req.body.body};
		console.log(dataf);
	});

	res.send("JSON.stringify(dataf)");
});



app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
});
