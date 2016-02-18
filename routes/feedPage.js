/*
 * GET feed page.
 */
var feeds = require('../feeds.json');

exports.view = function(req, res) {
	var mood = req.query.mood;
	console.log(mood);

	if (mood === 'all') {
		var allMood = [];
		for (var key in feeds) {
			allMood = allMood.concat(feeds[key]);
			// console.log(feeds[key]);
		}
		res.render('feedPage', {
			"imgName": "/img/happybackground.jpg",
			"feeds": allMood,
			"mood": 'allMood'
		});
console.log(allMood);
	} else {
		res.render('feedPage', {
			"imgName": "/img/" + mood + "background.jpg",
			"feeds": feeds[mood],
			"mood": mood
		});
	}
};