/*
 * GET feed page.
 */
var feeds = require('../feeds.json');

exports.view = function(req, res) {
	var mood = req.query.mood;
	console.log(mood);
	res.render('feedPage',{"imgName":"/img/"+mood+"background.jpg",
							"feeds":feeds[mood], 
							"mood":mood
						});
	
};