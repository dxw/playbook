const fullPath = location.pathname + location.hash

fetch('/redirects.json')
  .then((response) => response.json())
  .then((json) => {
    const redirectArray = json.redirects
    const redirectResult = redirectArray.find(item => item.from === fullPath)

    if (redirectResult) {
      location = redirectResult.to
    }
})
