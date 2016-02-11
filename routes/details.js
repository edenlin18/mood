var feeds = require('../feeds.json');

exports.feeddetails = function(req, res) {
	var id = req.query.id;
	var mood = req.query.mood;
	console.log(id);

	var feedDetails;
	feeds[mood].forEach(function(feed){
		if(feed.id = id){
			feedDetails = feed;
		}
	});

	console.log(feedDetails);

	res.render('details',{"details":feedDetails});
	
};