export default (links) => {
  const setActiveState = (element) => {
    element.setAttribute("class", "active");
  };
  const scrollToLink = (element) => {
    const locationID = element.getAttribute("data-target");
    document.getElementById(locationID).scrollIntoView({ behavior: "smooth" });
    if (window.innerWidth < 768) {
      document.querySelector("body").classList.remove("close");
    }
    history.pushState({}, "", "#" + locationID);
  };

  links.forEach((el) => {
    el.addEventListener("click", (event) => {
      links.forEach((el) => {
        el.removeAttribute("class");
      });
      scrollToLink(el);
      setActiveState(el);
      event.preventDefault();
    });
  });
};
