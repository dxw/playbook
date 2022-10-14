(() => {
  const displaySearchResults = (results, store, searchTerm) => {
    const searchResultsElement = document.getElementById("search-results");

    if (results.length) {
      let appendString = "";

      results.forEach((result) => {
        const item = store[result.ref];
        appendString +=
          '<li><a href="' + item.url + '"><h3>' + item.title + "</h3></a>";
        appendString += "<p>" + item.content.substring(0, 150) + "...</p></li>";
      });

      searchResultsElement.innerHTML = appendString;
    } else {
      searchResultsElement.innerHTML = "<li>No results found</li>";
    }
  };

  const getQueryVariable = (variable) => {
    const urlQueryString = window.location.search;
    const urlParams = new URLSearchParams(urlQueryString);
    return urlParams.get(variable);
  };

  const searchTerm = getQueryVariable("query");

  if (searchTerm) {
    document.getElementById("search-box").setAttribute("value", searchTerm);

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

      const results = index.search(searchTerm);
      displaySearchResults(results, window.store);
    }
  }
})();
