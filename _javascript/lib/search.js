import sidebarNavigation from "./sidebarNavigation";

export default () => {
  const searchBox = document.querySelector("input[type='search']");
  const sidebarData = document.querySelectorAll(".sidebar-nav ul li");
  const resultsPanel = document.querySelector(".results-panel");

  const getExcerpt = (result, query) => {
    const queryRegex = new RegExp(query, "i");
    const content = result.dataset.content;
    const searchIndex = content.search(queryRegex);
    const queryLength = query.length;
    const excerpt = content.slice(
      searchIndex - 20,
      searchIndex + queryLength + 20
    );

    return excerpt.replace(queryRegex, "<em class='search-keyword'>$&</em>");
  };

  searchBox.addEventListener("input", () => {
    const query = searchBox.value;

    resultsPanel.innerHTML = "";

    if (query.length > 3) {
      const results = Array.from(sidebarData).filter((element) => {
        return (
          element.dataset.content.match(new RegExp(query, "i")) ||
          element.dataset.title.match(new RegExp(query, "i"))
        );
      });

      let html = "";

      for (const result of results) {
        html += `
          <div class="matching-post">
            <a
              href="${result.querySelector("a").getAttribute("href")}"
              data-target="${result.querySelector("a").dataset.target}"
            >
              <h2>${result.dataset.title}</h2>
              <p>${getExcerpt(result, query)}</p>
            </a>
          </div>
        `;
      }

      resultsPanel.innerHTML = html;
      resultsPanel.classList.add("show");

      const links = resultsPanel.querySelectorAll("a");

      sidebarNavigation(links);
    }
  });
};
