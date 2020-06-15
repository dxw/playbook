import search from "../../../_javascript/lib/search";

describe("search", () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <input type="search" name="search"/>
      <div class="clear-button"></div>
      <div class="results-panel"></div>
      <div class="sidebar-nav">
        <ul>
          <li data-content="some text goes here" data-title="Title">
            <a href="#foo" data-target="foo"></a>
          </li>
          <li data-content="lorem ipsum" data-title="Hello">
            <a href="#bar" data-target="bar"></a>
          </li>
        </ul>
      </div>
    `;
  });

  it("returns search results", () => {
    search();

    const searchBox = document.querySelector("input[type='search']");

    searchBox.value = "text";
    searchBox.dispatchEvent(new Event("input"));

    const results = document
      .querySelector(".results-panel")
      .innerHTML.replace(/\s+/g, "");
    const expectedResults = `
      <div class="matching-post">
        <a href="#foo" data-target="foo">
          <h2>Title</h2>
          <p><em class="search-keyword">text</em> goes here</p>
        </a>
      </div>
    `.replace(/\s+/g, "");

    expect(results).toEqual(expectedResults);
  });
});
