import sidebarNavigation from "../_javascripts/src/lib/sidebar_navigation";

describe("sidebarNavigation", () => {
  const body = `
    <a href="#bar" data-target="bar" class="active"></a>
    <a href="#foo" data-target="foo"></a>
    <div id="foo"></div>
    <div id="bar"></div>
  `;
  const scrollIntoViewMock = jest.fn();
  const pushStateMock = jest.fn();

  beforeEach(() => {
    window.HTMLElement.prototype.scrollIntoView = scrollIntoViewMock;
    history.pushState = pushStateMock;
    document.body.innerHTML = body;
    const links = document.querySelectorAll("a");
    sidebarNavigation(links);
  });

  it("removes active class from other links", () => {
    var link = document.querySelector("a[data-target='foo']");
    link.click();
    expect(
      document.querySelector("a[data-target='bar']").classList
    ).not.toContain("active");
  });

  it("adds an active class to the clicked link", () => {
    var link = document.querySelector("a[data-target='foo']");
    link.click();
    expect(document.querySelector("a[data-target='foo']").classList).toContain(
      "active"
    );
  });

  it("scrolls the target into view", () => {
    var link = document.querySelector("a[data-target='foo']");
    link.click();
    expect(scrollIntoViewMock).toBeCalled();
  });

  it("adds the link to the pushState", () => {
    var link = document.querySelector("a[data-target='foo']");
    link.click();
    expect(pushStateMock).toBeCalledWith({}, "", "#foo");
  });
});
