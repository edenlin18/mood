exports.writePost = function(req, res) {
	var mood = req.query.mood;
	console.log(mood);
	res.render('newPost',
				{
					"imgName":"/img/"+mood+"background.jpg", 
					"mood":mood
				});
	
};