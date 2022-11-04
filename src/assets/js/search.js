(() => {
  const call = () => {
    const searchQuery = getQueryVariable("query");
    
    if (!searchQuery) { return }

    document.getElementById("search-box").setAttribute("value", searchQuery);

    const index = elasticlunr(function () {
      this.addField("title");
      this.addField("content");
      this.setRef("id");

      this.pipeline.remove(lunr.stemmer);
    });

    for (let key in window.store) {
      const content = formatContent(window.store[key].content);

      if (!content) { continue };

      window.store[key].content = content;

      index.addDoc({
        id: key,
        title: window.store[key].title,
        content: window.store[key].content,
      });
    }

    const results = index.search(searchQuery);
    displaySearchResults(results, searchQuery);
    setHeading(results.length, searchQuery);
  };

  const getQueryVariable = (variable) => {
    const urlQueryString = window.location.search;
    const urlParams = new URLSearchParams(urlQueryString);
    return urlParams.get(variable);
  };

  const formatContent = (rawContent) => {
    return rawContent
      .replace(/([.?!])[\n\s]{2,}/g, "$1 ")
      .replace(/[\n\s]{2,}/g, ". ")
      .replace(/\n/, " ")
      .trim()
      .replace(/^.$/, '');
  }

  const displaySearchResults = (results, searchQuery) => {
    const searchResultsElement = document.getElementById("search-results");

    if (results.length) {
      let innerHtml = "";

      results.forEach((result) => {
        const item = window.store[result.ref];

        const breadcrumbs = item.url
          .replace(".html", "")
          .replace(/-/g, " ")
          .split("/")
          .filter(i => i)
          .map(breadcrumb => breadcrumb[0].toUpperCase() + breadcrumb.substring(1))

        breadcrumbs.pop();

        innerHtml +=
          '<li class="search-results__result"><a href="' +
          item.url +
          '"><h2 class="search-results__result-title">' +
          item.title +
          "</h2></a>";
        if (breadcrumbs.length) {
          innerHtml += "<div class='search-results__result-breadcrumbs'>" + breadcrumbs.join(" > ") + "</div>";
        };
        innerHtml +=
          '<p class="search-results__result-excerpt">...' + getExcerpt(item.content, searchQuery) + "...</p></li>";
      });

      searchResultsElement.innerHTML = innerHtml;
    } else {
      searchResultsElement.innerHTML = "<li class='search-results__no-results-message'>No results found.</li>";
    }
  };

  const getExcerpt = (content, searchQuery) => {
    const queryRegex = new RegExp(searchQuery, "i");
    const matchIndex = content.search(queryRegex);
    const queryLength = searchQuery.length;
    const excerpt = content.slice(
      getStartIndex(matchIndex, content),
      getEndIndex(matchIndex, queryLength, content),
    );

    return excerpt.replace(
      queryRegex,
      "<strong class='search-results__matching-keyword'>$&</strong>"
    );
  };

  const getStartIndex = (matchIndex, content) => {
    let startIndex = Math.max(matchIndex - 100, 0);

    while (startIndex > 0 && content[startIndex] !== " ") {
      startIndex = startIndex - 1;
    };

    if (content[startIndex] === " ") { startIndex++; };

    return startIndex;
  };

  const getEndIndex = (matchIndex, queryLength, content) => {
    matchIndex = Math.max(matchIndex, 100);

    let endIndex = Math.min(matchIndex + queryLength + 100, content.length);

    while (endIndex !== content.length && content[endIndex] !== " ") {
      endIndex++;
    };

    return endIndex;
  };

  const setHeading = (resultsCount, searchQuery) => {
    const searchHeading = document.getElementById("search-heading");

    const resultsLabel = resultsCount == 1 ? "result" : "results";

    searchHeading.innerText = `Showing ${resultsCount} ${resultsLabel} for "${searchQuery}"`
  };

  call();
})();
