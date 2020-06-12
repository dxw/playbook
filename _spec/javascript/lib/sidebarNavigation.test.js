import sidebarNavigation from "../../../_javascript/lib/sidebarNavigation";

describe("sidebarNavigation", () => {
  let scrollIntoViewMock;
  let links;

  beforeEach(() => {
    scrollIntoViewMock = jest.fn();
    window.HTMLElement.prototype.scrollIntoView = scrollIntoViewMock;

    jest.spyOn(history, "pushState");

    document.body.innerHTML = `
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

    expect(scrollIntoViewMock).toHaveBeenCalled();
  });

  it("adds the link to the pushState", () => {
    sidebarNavigation(links);

    const link = document.querySelector("a[data-target='foo']");

    link.click();

    expect(history.pushState).toHaveBeenCalledWith({}, "", "#foo");
  });

  it("collapses the navigation on smaller viewports", () => {
    sidebarNavigation(links);

    window.innerWidth = 500;

    document.querySelector("body").classList.add("close");

    const link = document.querySelector("a[data-target='foo']");

    link.click();

    expect(document.querySelector("body").classList).not.toContain("close");
  });
});
