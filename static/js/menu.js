
  $(document).ready(function(){
    $('.sidenav').sidenav();
  });


 //---------------------------------------------------------
  // Navbar
  //---------------------------------------------------------
  $('.NavbarToggle').on('click', function() {
    $(this).toggleClass('On');
    $('.NavbarLinkList, .NavbarMask, .ToggleOne, .ToggleTwo, .ToggleThree').toggleClass('On');
  });

  $('.NavbarLinkItem, .NavbarMask').on('click', function() {
    $('.NavbarToggle, .NavbarLinkList, .NavbarMask, .ToggleOne, .ToggleTwo, .ToggleThree').removeClass('On');
  });


 