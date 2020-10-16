export default (links) => {
  const setActiveState = (element) => {
    element.classList.add("active");
  };

  const getElementLocation = (element) => {
    const navElement = document.querySelector(".app-nav");
    const yOffset = navElement.offsetHeight;

    return element.getBoundingClientRect().top + window.pageYOffset - yOffset;
  };

  const scrollToLink = (element) => {
    const locationID = element.getAttribute("data-target");
    const targetElement = document.getElementById(locationID);

    window.scrollTo({
      top: getElementLocation(targetElement),
      behavior: "smooth",
    });

    if (window.innerWidth < 768) {
      const body = document.querySelector("body");

      body.classList.remove("close");
    }

    history.pushState({}, "", "#" + locationID);
  };

  for (const link of links) {
    link.addEventListener("click", (event) => {
      for (const l of links) {
        l.classList.remove("active");
        l.classList.remove("close");
      }

      scrollToLink(link);
      setActiveState(link);

      event.preventDefault();
    });
  }
};
