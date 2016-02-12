'use strict';
var devMode = true;
var serverUrl = devMode ? 'http://localhost:3000' : 'http://moodi.herokuapp.com';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	// add any functionality and listeners you want here
	$('.modal').on('hidden.bs.modal', function() {
		$(this).find('form')[0].reset();
	});

	$('.modal').on('show.bs.modal', function() {
		if ($(document).height() > $(window).height()) {
			// no-scroll
			$('body').addClass("modal-open-noscroll");
		} else {
			$('body').removeClass("modal-open-noscroll");
		}
	})

	$('.modal').on('hide.bs.modal', function() {
		$('body').removeClass("modal-open-noscroll");
	});

	if (myLocalStorage.get('login') === true) {
		$('#loginButton').css('display', 'none');
	} else {
		$('#logoutButton').css('display', 'none');
	}

	$('#logoutButton').click(logout);

	$('.text-story').on('keyup', convertToEmoji);
}

function convertToEmoji(e){
	if(e.which == 32){ // Press space
		var words = $(this).val().split(' ');
		var lastWord = words[words.length - 2];
		console.log("last word is: "+lastWord);

        //var emojiLib = JSON.parse('../emoji.json');
        $.get( "emoji?word="+lastWord, function( data ) {
        	console.log(data);
        	if(data == ""){
        		$('.emoji-story').append(lastWord+" ");
        	}else{
        		$('.emoji-story').append(data);	
        	}
        });
        
    }
}

var myLocalStorage = {
	set: function(item, value) {
		localStorage.setItem(item, JSON.stringify(value));
	},
	get: function(item) {
		return JSON.parse(localStorage.getItem(item));
	},
	remove: function(item) {
		localStorage.removeItem(item);
	}
};

function reportErrors(errors) {
	var msg = errors[0];
	for (var i = 1; i < errors.length; i++) {
		msg += '<br>' + errors[i];
	}

	$('#loginModal .modal-dialog').addClass('shake');
	$('.error').addClass('alert alert-danger').html(msg);
	$('input[type="password"]').val('');
	setTimeout(function() {
		$('#loginModal .modal-dialog').removeClass('shake');
	}, 1000);
}

function validateEmail(email) {
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	return re.test(email);
}

function validateLoginForm() {
	var email = document.loginForm.email.value;
	var password = document.loginForm.password.value;
	var errors = [];

	if (!validateEmail(email)) {
		errors[errors.length] = 'You must enter a valid email address.';
	}

	if (password == '') {
		errors[errors.length] = 'Password cannot be empty.';
	}

	if (errors.length > 0) {
		reportErrors(errors);
		return;
	}

	// talk to server
	$.ajax({
		type: 'POST',
		url: serverUrl + '/login',
		data: JSON.stringify({
			email: email,
			password: password
		}),
		contentType: 'application/json',
		dataType: 'json',
		success: function(data) {
			if (data.result == true) {
				myLocalStorage.set('login', true);
				myLocalStorage.set('email', email);
				window.location.reload(true);
			} else {
				errors[errors.length] = data.error;
				reportErrors(errors);
			}
		}
	});
}

function validateSignupForm() {
	var email = document.signupForm.email.value;
	var password = document.signupForm.password.value;
	var confirmedPassword = document.signupForm.confirmedPassword.value;
	var errors = [];

	if (!validateEmail(email)) {
		errors[errors.length] = 'You must enter a valid email address.';
	}

	if (password == '') {
		errors[errors.length] = 'Password cannot be empty.';
	}

	if (password != confirmedPassword) {
		errors[errors.length] = 'Please enter the same password.';
	}

	if (errors.length > 0) {
		reportErrors(errors);
		return;
	}

	// talk to server
	$.ajax({
		type: 'POST',
		url: serverUrl + '/signup',
		data: JSON.stringify({
			email: email,
			password: password
		}),
		contentType: 'application/json',
		dataType: 'json',
		success: function(data) {
			if (data.result == true) {
				myLocalStorage.set('login', true);
				myLocalStorage.set('email', email);
				window.location.reload(true);
			} else {
				errors[errors.length] = data.error;
				reportErrors(errors);
			}
		}
	});
}

function logout() {
	myLocalStorage.remove('login');
	myLocalStorage.remove('email');
	window.location.reload(true);
}


/*
 *
 * login-register modal
 * Autor: Creative Tim
 * Web-autor: creative.tim
 * Web script: http://creative-tim.com
 * 
 */
 function showSignupForm() {
 	$('.loginBox').fadeOut('fast', function() {
 		$('.registerBox').fadeIn('fast');
 		$('.login-footer').fadeOut('fast', function() {
 			$('.register-footer').fadeIn('fast');
 		});
 		$('.modal-title').html('Signup with');
 	});
 	$('.error').removeClass('alert alert-danger').html('');

 }

 function showLoginForm() {
 	$('#loginModal .registerBox').fadeOut('fast', function() {
 		$('.loginBox').fadeIn('fast');
 		$('.register-footer').fadeOut('fast', function() {
 			$('.login-footer').fadeIn('fast');
 		});

 		$('.modal-title').html('Login with');
 	});
 	$('.error').removeClass('alert alert-danger').html('');
 }

 function openLoginModal() {
 	showLoginForm();
 	setTimeout(function() {
 		$('#loginModal').modal('show');
 	}, 230);

 }

 function openRegisterModal() {
 	showRegisterForm();
 	setTimeout(function() {
 		$('#loginModal').modal('show');
 	}, 230);

 }

 function loginAjax() {
	/*   Remove this comments when moving to server
	$.post( "/login", function( data ) {
	        if(data == 1){
	            window.location.replace("/home");            
	        } else {
	             shakeModal(); 
	        }
	    });
*/

/*   Simulate error message from the server   */
shakeModal();
}