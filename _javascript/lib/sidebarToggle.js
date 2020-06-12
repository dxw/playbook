export default () => {
  const sidebarToggle = document.querySelector(".sidebar-toggle");
  const body = document.querySelector("body");

  sidebarToggle.addEventListener("click", () => {
    if (body.classList.contains("close")) {
      body.classList.remove("close");
    } else {
      body.classList.add("close");
    }
  });
};
