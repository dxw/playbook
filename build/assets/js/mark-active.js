(function () {
  'use strict';
  var links = document.querySelectorAll(".sidebar-nav li a");

  links.forEach(function (el) {
    el.addEventListener("click", function() {
      links.forEach(function(el) {
        el.removeAttribute("class")
      })
      el.setAttribute("class", "active")
    })
  })
}());
