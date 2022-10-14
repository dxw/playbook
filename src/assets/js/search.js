(() => {
  const displaySearchResults = (results) => {
    const searchResultsElement = document.getElementById("search-results");

    if (results.length) {
      let innerHtml = "";

      results.forEach((result) => {
        const item = window.store[result.ref];
        innerHtml +=
          '<li><a href="' + item.url + '"><h2>' + item.title + "</h2></a>";
        innerHtml += "<p>" + item.content.substring(0, 150) + "...</p></li>";
      });

      searchResultsElement.innerHTML = innerHtml;
    } else {
      searchResultsElement.innerHTML = "<li>No results found.</li>";
    }
  };

  const getQueryVariable = (variable) => {
    const urlQueryString = window.location.search;
    const urlParams = new URLSearchParams(urlQueryString);
    return urlParams.get(variable);
  };

  const searchQuery = getQueryVariable("query");

  if (searchQuery) {
    document.getElementById("search-box").setAttribute("value", searchQuery);

    const index = elasticlunr(function () {
      this.addField("title");
      this.addField("content");
      this.setRef("id");
    });

    for (let key in window.store) {
      index.addDoc({
        id: key,
        title: window.store[key].title,
        content: window.store[key].content,
      });
    }

    const results = index.search(searchQuery);
    displaySearchResults(results);
  }
})();
