export default (links) => {
  const setActiveState = (element) => {
    element.classList.add("active");
  };

  const scrollToLink = (element) => {
    const locationID = element.getAttribute("data-target");

    document.getElementById(locationID).scrollIntoView({ behavior: "smooth" });

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
