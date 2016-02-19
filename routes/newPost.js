var feeds = require('../feeds.json');

exports.writePost = function(req, res) {
	var mood = req.query.mood;
	console.log(mood);
	res.render('newPost', {
		"imgName": "/img/" + mood + "background.jpg",
		"mood": mood
	});

};

var counter = 10;

exports.addPost = function(req, res) {
	var mood = req.body.mood;
	req.body.id = req.body.id + counter;
	feeds[mood].unshift(req.body);
	counter++;
	res.send({
		result: true
	});
}