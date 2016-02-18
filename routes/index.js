/*
 * GET home page.
 */

exports.view = function(req, res) {
	res.render('index', {
		'moods': [{
			'mood': 'Happy',
			'id': 'happy',
			'imgName': 'happy.png'
		}, {
			'mood': 'Mad',
			'id': 'mad',
			'imgName': 'mad.png'
		}, {
			'mood': 'Lovely',
			'id': 'lovely',
			'imgName': 'lovely.png'
		}, {
			'mood': 'Neutral',
			'id': 'neutral',
			'imgName': 'neutral.png'
		}, {
			'mood': 'Scared',
			'id': 'scared',
			'imgName': 'scared.png'
		}, {
			'mood': 'Sad',
			'id': 'sad',
			'imgName': 'sad.png'
		}]
	});
};