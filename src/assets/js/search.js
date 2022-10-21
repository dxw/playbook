(() => {
  const getExcerpt = (content, query) => {
    const queryRegex = new RegExp(query, "i");
    const searchIndex = content.search(queryRegex);
    const queryLength = query.length;
    const excerpt = content.slice(
      getStartIndex(searchIndex, content),
      getEndIndex(searchIndex, queryLength, content),
    );

    return excerpt.replace(
      queryRegex,
      "<strong class='search-results__matching-keyword'>$&</strong>"
    );
  };

  const getStartIndex = (searchIndex, content) => {
    let startIndex = searchIndex - 100;

    if (startIndex < 0) { startIndex = 0; };

    while (startIndex > 0 && content[startIndex] !== " ") {
      startIndex = startIndex - 1;
    };

    if (content[startIndex] === " ") { startIndex++; };

    return startIndex;
  };

  const getEndIndex = (searchIndex, queryLength, content) => {
    let endIndex = searchIndex + queryLength + 100;

    while (endIndex !== content.length && content[endIndex] !== " ") {
      endIndex++;
    };

    return endIndex;
  };

  const displaySearchResults = (results, store, searchTerm) => {
    const searchResultsElement = document.getElementById("search-results");

    if (results.length) {
      let appendString = "";

      results.forEach((result) => {
        const item = store[result.ref];
        appendString +=
          '<li class="search-results__result"><a href="' + item.url + '"><h3>' + item.title + "</h3></a>";
        appendString +=
          "<p>..." + getExcerpt(item.content, searchTerm) + "...</p></li>";
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

  const formatContent = (rawContent) => {
    return rawContent
      .replace(/([\.\?\!])[\n\s]{2,}/g, "$1 ")
      .replace(/[\n\s]{2,}/g, ". ")
      .replace(/\n/, " ");
  }

  if (searchTerm) {
    document.getElementById("search-box").setAttribute("value", searchTerm);

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

      const results = index.search(searchTerm);
      displaySearchResults(results, window.store, searchTerm);
    }
  }
})();
