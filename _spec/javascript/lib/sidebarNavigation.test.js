import sidebarNavigation from "../../../_javascript/lib/sidebarNavigation";

describe("sidebarNavigation", () => {
  let scrollToMock;
  let links;

  beforeEach(() => {
    scrollToMock = jest.fn();
    window.scrollTo = scrollToMock;

    jest.spyOn(history, "pushState");
    jest.useFakeTimers();

    document.body.innerHTML = `
      <nav class="app-nav"></nav>
      <a href="#bar" data-target="bar" class="active"></a>
      <a href="#foo" data-target="foo"></a>
      <div id="foo"></div>
      <div id="bar"></div>
    `;

    links = document.querySelectorAll("a");
  });

  it("removes active class from other links", () => {
    sidebarNavigation(links);

    const link = document.querySelector("a[data-target='foo']");

    link.click();

    expect(
      document.querySelector("a[data-target='bar']").classList
    ).not.toContain("active");
  });

  it("adds an active class to the clicked link", () => {
    sidebarNavigation(links);

    const link = document.querySelector("a[data-target='foo']");

    link.click();

    expect(document.querySelector("a[data-target='foo']").classList).toContain(
      "active"
    );
  });

  it("scrolls the target into view", () => {
    sidebarNavigation(links);

    const link = document.querySelector("a[data-target='foo']");

    link.click();

    expect(scrollToMock).toHaveBeenCalled();
  });

  it("adds the link to the pushState", () => {
    sidebarNavigation(links);

    const link = document.querySelector("a[data-target='foo']");

    link.click();

    jest.runAllTimers();

    expect(history.pushState).toHaveBeenCalledWith({}, "", "#foo");
  });

  it("collapses the navigation on smaller viewports", () => {
    sidebarNavigation(links);

    window.innerWidth = 500;

    document.querySelector("body").classList.add("close");

    const link = document.querySelector("a[data-target='foo']");

    link.click();

    jest.runAllTimers();

    expect(document.querySelector("body").classList).not.toContain("close");
  });
});
