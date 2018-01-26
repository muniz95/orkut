if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', function () {
  
    // Get all "navbar-burger" elements
    var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
  
      // Add a click event on each of them
      $navbarBurgers.forEach(function ($el) {
        $el.addEventListener('click', function () {
  
          // Get the target from the "data-target" attribute
          var target = $el.dataset.target;
          var $target = document.getElementById(target);
  
          // Toggle the class on both the "navbar-burger" and the "navbar-menu"
          $el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
  
        });
      });
    }
    
    var $backdrop = document.getElementById('main-section');
    $backdrop.addEventListener('click', function() {
      var $target = document.getElementById('navbarExampleTransparentExample');
      var $btnMenu = document.getElementById('btnMenu');
      if ($target.classList.contains('is-active')) {
        $target.classList.toggle('is-active');
        $btnMenu.classList.toggle('is-active');
      }
    })
  
  });
}