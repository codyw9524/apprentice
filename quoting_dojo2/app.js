var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var app = express();

mongoose.connect('mongodb://localhost/apprentice_quoting_dojo2');

var QuoteSchema = new mongoose.Schema({
	name: String,
	quote: String,
	likes: {type: Number, default: 0},
	created_at: {type: Date, default: new Date()}
})

mongoose.model('Quote', QuoteSchema);

var Quote = mongoose.model('Quote');

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/static'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', function(req, res){
	res.render('index');
})

app.post('/quotes', function(req, res){
	var quote = new Quote(req.body);
	quote.save(function(err, doc){
		if(err){
			console.log(err);
		} else {
			console.log('quote added to db...')
			res.redirect('/quotes');
		}
	})
})

app.get('/quotes', function(req, res){
	Quote.find({}, function(err, doc){
		if(err){
			console.log(err);
		} else {
			res.render('quotes', {quotes: doc});
		}
	})
})

app.post('/likes', function(req, res){
	Quote.findById(req.body.id, function(err, doc){
		if(err){
			console.log(err);
		} else {
			doc.likes++;
			doc.save(function(err, doc){
				if(err){
					console.log(err);
				} else {
					res.redirect('/quotes');
				}
			})
		}
	})
})

var server = app.listen(3000, function(){
	console.log('listening on port 3000...');
})