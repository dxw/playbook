(() => {
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

  const displaySearchResults = (results, searchQuery) => {
    const searchResultsElement = document.getElementById("search-results");

    if (results.length) {
      let innerHtml = "";

      results.forEach((result) => {
        const item = window.store[result.ref];
        innerHtml +=
          '<li class="search-results__result"><a href="' + item.url + '"><h2>' + item.title + "</h2></a>";
        innerHtml +=
          "<p>..." + getExcerpt(item.content, searchQuery) + "...</p></li>";
      });

      searchResultsElement.innerHTML = innerHtml;
    } else {
      searchResultsElement.innerHTML = "<li class='search-results__no-results-message'>No results found.</li>";
    }
  };

  const getQueryVariable = (variable) => {
    const urlQueryString = window.location.search;
    const urlParams = new URLSearchParams(urlQueryString);
    return urlParams.get(variable);
  };

  const searchQuery = getQueryVariable("query");

  const formatContent = (rawContent) => {
    return rawContent
      .replace(/([.?!])[\n\s]{2,}/g, "$1 ")
      .replace(/[\n\s]{2,}/g, ". ")
      .replace(/\n/, " ")
      .trim()
      .replace(/^.$/, '');
  }

  if (searchQuery) {
    document.getElementById("search-box").setAttribute("value", searchQuery);

    const index = elasticlunr(function () {
      this.addField("title");
      this.addField("content");
      this.setRef("id");

      this.pipeline.remove(lunr.stemmer);
    });

    for (let key in window.store) {
      window.store[key].content = formatContent(window.store[key].content);

      index.addDoc({
        id: key,
        title: window.store[key].title,
        content: window.store[key].content,
      });
    }

    const results = index.search(searchQuery);
    displaySearchResults(results, searchQuery);
  }
})();
