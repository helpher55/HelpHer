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
}

function showMapPage() {
  hideAllPages();
  $("#mapPage").show();
}   