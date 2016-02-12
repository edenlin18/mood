exports.processSignup = function(req, res) {
	console.log(req.body);
	var demoEmail = 'demo@moodi.com';
	var demoPassword = 'moodi';

	var email = req.body.email;
	var password = req.body.password;

	if (email == demoEmail) {
		res.send({
			result: false,
			error: 'Email has been taken.'
		});
	} else {
		res.send({
			result: true
		});
	}
};