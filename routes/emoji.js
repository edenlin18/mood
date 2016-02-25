var emojiLib = require('../emoji.json');

exports.emojiInfo = function(req, res) {
	var word = req.query.word.split(' ');
	var mood = req.query.mood;
	var result = '';
	
	word.forEach(function(w) {
		if (w === '') {
			result += '&nbsp&nbsp&nbsp';
		} else {
			var emoji = emojiLib[mood][Math.floor(Math.random() * emojiLib[mood].length)];
			result += '<img class="emoji" src="' + emoji + '">&nbsp&nbsp&nbsp';
		}
	});

	res.send(result);
}