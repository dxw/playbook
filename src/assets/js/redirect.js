var fullPath = location.pathname + location.hash

fetch('/redirects.json')
  .then((response) => response.json())
  .then((json) => {
  var redirectArray = json.redirects
  var redirectResult = redirectArray.find(item => item.from === fullPath);

  if (redirectResult) {
    location = redirectResult.to
  }
});
