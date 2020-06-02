var sidebarNavigation = function(links) {
  'use strict';
  var locationID
  var setActiveState = function(element) {
    element.setAttribute("class", "active")
  }
  var scrollToLink = function(element) {
    locationID = element.getAttribute("data-target")
    document.getElementById(locationID).scrollIntoView({ behavior: 'smooth' })
    if (window.innerWidth < 768) {
      document.querySelector("body").classList.remove("close")
    }
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
}

var links = document.querySelectorAll(".sidebar-nav li a");

sidebarNavigation(links);
