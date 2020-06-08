import sidebarNavigation from "./sidebar_navigation";

export default () => {
  const searchBox = document.querySelector("input[type='search']");
  const sidebarData = document.querySelectorAll(".sidebar-nav ul li");
  const resultsPanel = document.querySelector(".results-panel");
  const clearButton = document.querySelector(".clear-button");

  const getExcerpt = (result, query) => {
    const content = result.dataset.content;
    const searchIndex = content.search(new RegExp(query, "i"));
    const queryLength = query.length;
    const excerpt = content.slice(
      searchIndex - 20,
      searchIndex + queryLength + 20
    );

    return excerpt.replace(
      query,
      "<em class='search-keyword'>" + query + "</em>"
    );
  };

  searchBox.addEventListener("input", (event) => {
    const query = searchBox.value;

    resultsPanel.innerHTML = "";
    clearButton.classList.add("show");

    if (query.length > 3) {
      const results = Array.from(sidebarData).filter(function (el) {
        return (
          el.dataset.content.match(new RegExp(query, "i")) ||
          el.dataset.title.match(new RegExp(query, "i"))
        );
      });

      let html = "";

      results.forEach((result) => {
        html += `
        <div class="matching-post">
          <a href="${result
            .querySelector("a")
            .getAttribute("href")}" data-target="${
          result.querySelector("a").dataset.target
        }">
            <h2>${result.dataset.title}</h2>
            <p>${getExcerpt(result, query)}</p>
          </a>
        </div>
        `;
      });

      resultsPanel.innerHTML = html;
      resultsPanel.classList.add("show");

      const links = resultsPanel.querySelectorAll("a");

      sidebarNavigation(links);
    }
  });

  clearButton.addEventListener("click", () => {
    searchBox.value = "";
    resultsPanel.innerHTML = "";
  });
};
