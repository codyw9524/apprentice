var express = require('express');
var app = express();
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/static'));

var server = app.listen(3000, function(){
	console.log('listening on port 3000...');
})

app.get('/', function(req, res){
	res.render('index', {messages: messagesArray});
})

var messagesArray = [];

var io = require('socket.io').listen(server);

io.sockets.on('connection', function(socket){
	console.log('new socket connection');
	console.log(socket.id);
	socket.on('chatSent', function(res){
		messagesArray.push(res);
		io.emit('updateChat', res);
	})
})