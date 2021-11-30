export default (links) => {
  const setActiveState = (element) => {
    element.classList.add("active");
  };

  const getElementLocation = (element) => {
    const yOffset = parseInt(getComputedStyle(element).scrollMarginTop) || 0;

    return element.getBoundingClientRect().top + window.pageYOffset - yOffset;
  };

  const scrollToLink = (link) => {
    const locationID = link.getAttribute("data-target");
    const targetElement = document.getElementById(locationID);
    const y = getElementLocation(targetElement);

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });

    const intervalID = setInterval(function () {
      // Check if the Y Offset has got within 10 pixels of the target
      // it's not always going to be exact, so make sure we're roughly
      // there
      if (Math.abs(y - window.pageYOffset) < 5) {
        link.blur();
        // Set focus on the target element. Because it's not an anchor
        // or form element, we need to give it a tabindex first
        targetElement.setAttribute("tabindex", "-1");
        targetElement.focus();

        if (window.innerWidth < 768) {
          const body = document.querySelector("body");

          body.classList.remove("close");
        }

        history.pushState({}, "", "#" + locationID);

        clearInterval(intervalID);
      }
    }, 300);
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
