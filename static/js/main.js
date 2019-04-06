var login = "";
var token = "";
var userid = "";


$(document).ready(function(){
  $('.sidenav').sidenav();
});


function hideAllPages() {
  $("#loginPage,#formPage,#mapPage").hide();
}

function showLoginPage() {
  hideAllPages();
  $("#loginPage").show();
}

function showFormPage() {
  hideAllPages();
  $("#formPage").show();
  listForm();
}

function showMapPage() {
  hideAllPages();
  $("#mapPage").show();
}   


function saveNewUser(login, userid, username, useremail) {
	var url = "/saveNewUser?"
				+ "login=" + login
				+ "&userid=" + userid 
				+ "&username=" + username 
				+ "&useremail=" + useremail;
	
	$.post(url, {}, function(response) {
		console.log('Successful login: ' + response);
	});
}