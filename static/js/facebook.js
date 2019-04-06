
window.fbAsyncInit = function() {
	FB.init({
		appId: '2023684611271384',
		cookie: true,
		xfbml: true,
		version: 'v3.2'
	});
	FB.AppEvents.logPageView();

	FB.getLoginStatus(function(response) {
		statusChangeCallback(response);
	});

	FB.logout(function(response) {
	});
};

(function(d, s, id) {
	var js, fjs = d.getElementsByTagName(s)[0];
	if (d.getElementById(id)) {
		return;
	}
	js = d.createElement(s);
	js.id = id;
	js.src = "https://connect.facebook.net/en_US/sdk.js";
	fjs.parentNode.insertBefore(js, fjs);
})
(document, 'script', 'facebook-jssdk');


function checkLoginState() {
	FB.getLoginStatus(function(response) {
	  statusChangeCallback(response);
	});
}

function statusChangeCallback(response) {
	if (response.status === 'connected') {
		token = response.authResponse.accessToken;
		userid = response.authResponse.userID;
		login = "fb";
		getFbUser();
	  } 
}

function getFbUser() {
    FB.api('/me?fields=id,email,name', function(response) {
	  saveNewUser("fb", response.id, response.name, response.email);
    });
}
