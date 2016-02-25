/*
 * GET feed page.
 */
var feeds = require('../feeds.json');
var emojiLib = require('../emoji.json');

function compareTimeStamp(a, b) {
	if (a.time < b.time)
		return 1;
	else if (a.time > b.time)
		return -1;
	else
		return 0;
}

function translateToEmoji(mood, content) {
	var word = content.split(' ');
	var result = '';
	word.forEach(function(w) {
		if (w === '') {
			result += '&nbsp&nbsp&nbsp';
		} else {
			var emoji = emojiLib[mood][Math.floor(Math.random() * emojiLib[mood].length)];
			result += '<img class="emoji" src="' + emoji + '">&nbsp&nbsp&nbsp';
		}
	});

	return result;
}

exports.view = function(req, res) {
	var mood = req.query.mood;

	for (var key in feeds) {
		feeds[key].forEach(function(obj, index, theArray) {
			if (theArray[index].emojiContent == '') {
				theArray[index].emojiContent = translateToEmoji(theArray[index].mood, theArray[index].content);
			}
		});
	}

	if (mood === 'all') {
		var allMood = [];
		for (var key in feeds) {
			allMood = allMood.concat(feeds[key]);
		}
		allMood.sort(compareTimeStamp);

		res.render('feedPage', {
			"feeds": allMood,
			"mood": mood
		});
	} else {
		feeds[mood].sort(compareTimeStamp);

		res.render('feedPage', {
			"feeds": feeds[mood],
			"mood": mood
		});
	}
};