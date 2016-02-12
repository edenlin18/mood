exports.processLogin = function(req, res) {
	console.log(req.body);
	var demoEmail = 'demo@moodi.com';
	var demoPassword = 'moodi';

	var email = req.body.email;
	var password = req.body.password;

	if (email == demoEmail && password == demoPassword) {
		res.send({
			result: true
		});
	} else {
		res.send({
			result: false,
			error: 'Email or password is incorrect.'
		});
	}
};