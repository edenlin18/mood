var feeds = require('../feeds.json');

exports.writePost = function(req, res) {
	var mood = req.query.mood;
	console.log(mood);
	res.render('newPost',
				{
					"imgName":"/img/"+mood+"background.jpg", 
					"mood":mood
				});
	
};

exports.addPost = function(req,res){
		console.log(req.body);
	var mood = req.body.mood;
	console.log(mood);
	feeds[mood].push(req.body);
	res.send(mood);
}