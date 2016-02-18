var emojiLib = require('../emoji.json');

exports.emojiInfo = function(req, res) {
	// var word = req.query.word;
	// console.log(word);
	// if (emojiLib[word]) {
	// 	var emoji = emojiLib[word][Math.floor(Math.random() * emojiLib[word].length)];

	// 	res.send("<img class='emoji' src=" + emoji + ">");
	// } else {
	// 	res.send("");
	// }

	var word = req.query.word.split(' ');
	var result = '';
	word.forEach(function(w) {
		if (w === '') {
			result += '&nbsp';
		} else {
			var emoji = emojiLib['happy'][Math.floor(Math.random() * emojiLib['happy'].length)];
			result += '<img class="emoji" src="' + emoji + '">';
		}
	});

	res.send(result);
}