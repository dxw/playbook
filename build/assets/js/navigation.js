(function () {
  'use strict';
  var links = document.querySelectorAll(".sidebar-nav li a");
  var locationID
  var setActiveState = function(element) {
    element.setAttribute("class", "active")
  }
  var scrollToLink = function(element) {
    locationID = element.getAttribute("data-target")
    document.getElementById(locationID).scrollIntoView({ behavior: 'smooth' })
    history.pushState({}, "", "#" + locationID)
  }

  links.forEach(function (el) {
    el.addEventListener("click", function(event) {
      links.forEach(function(el) {
        el.removeAttribute("class")
      })
      scrollToLink(el)
      setActiveState(el)
      event.preventDefault()
    })
  })
}());
