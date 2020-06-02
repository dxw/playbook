(function () {
  'use strict';
  var sidebarToggle = document.querySelector(".sidebar-toggle")
  var body = document.querySelector("body")

  sidebarToggle.addEventListener("click", function() {
    if (body.classList.contains("close")) {
      body.classList.remove("close")
    } else {
      body.classList.add("close")
    }
  })
}());
