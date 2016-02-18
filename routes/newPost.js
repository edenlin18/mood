var feeds = require('../feeds.json');

exports.writePost = function(req, res) {
	var mood = req.query.mood;
	console.log(mood);
	res.render('newPost', {
		"imgName": "/img/" + mood + "background.jpg",
		"mood": mood
	});

};

exports.addPost = function(req, res) {
	var mood = req.body.mood;
	feeds[mood].unshift(req.body);
	res.send({
		result: true
	});
}