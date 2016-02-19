/*
 * GET feed page.
 */
var feeds = require('../feeds.json');

var compareTimeStamp = function(a, b){
	if (a.time < b.time)
    return 1;
	else if (a.time > b.time)
	  return -1;
	else 
	  return 0;
}

exports.view = function(req, res) {
	var mood = req.query.mood;
	var sortedFeeds;
	console.log(mood);

	if (mood === 'all') {
		var allMood = [];
		for (var key in feeds) {
			allMood = allMood.concat(feeds[key]);
			// console.log(feeds[key]);
		}
		allMood.sort(compareTimeStamp);
		console.log(allMood);

		res.render('feedPage', {
			"feeds": allMood,
			"mood": mood
		});
	} else {
		feeds[mood].sort(compareTimeStamp);
		console.log(feeds[mood]);
		
		res.render('feedPage', {
			"feeds": feeds[mood],
			"mood": mood
		});
	}

	
};