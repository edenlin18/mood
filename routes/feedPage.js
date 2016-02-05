/*
 * GET feed page.
 */

exports.view = function(req, res) {
	var mood = req.query.mood;
	console.log(mood);
	res.render('feedPage',{"imgName":"/img/"+mood+"background.jpg",
		'feeds' :[{
			'title':'test',
			'content' : 'testing feed',
			'id':mood
		},
		{
			'title':'test',
			'content' : 'testing feed',
			'id':mood
		},
		{
			'title':'test',
			'content' : 'testing feed',
			'id':mood
		},
		{
			'title':'test',
			'content' : 'testing feed',
			'id':mood
		},
		{
			'title':'test',
			'content' : 'testing feed',
			'id':mood
		},
		{
			'title':'test',
			'content' : 'testing feed',
			'id':mood
		},
		{
			'title':'test',
			'content' : 'testing feed',
			'id':mood
		},
		{
			'title':'test',
			'content' : 'testing feed',
			'id':mood
		},]
	});
	
};