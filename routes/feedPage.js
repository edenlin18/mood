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
			result += '&nbsp';
		} else {
			var emoji = emojiLib[mood][Math.floor(Math.random() * emojiLib[mood].length)];
			result += '<img class="emoji" src="' + emoji + '">';
		}
	});

	return result;
}

exports.view = function(req, res) {
	var mood = req.query.mood;
	var sortedFeeds;
	console.log(mood);
	var tempFeeds = JSON.parse(JSON.stringify(feeds));
	for (var key in tempFeeds) {
		tempFeeds[key].forEach(function(obj, index, theArray) {
			theArray[index].content = translateToEmoji(theArray[index].mood, theArray[index].content);
		});
		// console.log(feeds[key]);
	}

	if (mood === 'all') {
		var allMood = [];
		for (var key in tempFeeds) {
			allMood = allMood.concat(tempFeeds[key]);
			// console.log(feeds[key]);
		}
		allMood.sort(compareTimeStamp);
		console.log(allMood);

		res.render('feedPage', {
			"feeds": allMood,
			"mood": mood
		});
	} else {
		tempFeeds[mood].sort(compareTimeStamp);
		console.log(tempFeeds[mood]);

		res.render('feedPage', {
			"feeds": tempFeeds[mood],
			"mood": mood
		});
	}
};