(function () {
  'use strict';
  var searchBox = document.querySelector("input[type='search']")
  var sidebarData = document.querySelectorAll(".sidebar-nav ul li")
  var resultsPanel = document.querySelector(".results-panel")
  var clearButton = document.querySelector(".clear-button")
  var template = document.getElementById("matching-post")
  var results
  var clone

  var getExcerpt = function(result, query) {
    var content = result.dataset.content
    var searchIndex = content.search(new RegExp(query, "i"))
    var queryLength = query.length
    var excerpt = content.slice(searchIndex - 20, (searchIndex + queryLength) + 20)

    return excerpt.replace(query, "<em class='search-keyword'>"+ query +"</em>")
  }

  searchBox.addEventListener("input", function(event) {
    var query = searchBox.value
    resultsPanel.innerHTML = ""
    clearButton.classList.add("show")

    if (query.length > 3) {
      results = Array.from(sidebarData).filter(function(el) {
        return el.dataset.content.match(new RegExp(query, "i")) || el.dataset.title.match(new RegExp(query, "i"))
      })

      results.forEach(function(result) {
        clone = template.content.cloneNode(true);
        clone.querySelector("h2").textContent = result.dataset.title
        clone.querySelector("a").setAttribute("href", result.querySelector("a").getAttribute("href"))
        clone.querySelector("p").innerHTML = getExcerpt(result, query)

        resultsPanel.appendChild(clone)
      })

      resultsPanel.classList.add("show")
    }
  })

  clearButton.addEventListener("click", function() {
    searchBox.value = ""
    resultsPanel.innerHTML = ""
  })
}());
