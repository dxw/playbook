// define the `plausible` function to manually trigger events
window.plausible = window.plausible || function () {
  (window.plausible.q = window.plausible.q || []).push(arguments)
}

function prepareUrl (params) {
  const url = new URL(window.location.href)
  const queryParams = new URLSearchParams(window.location.search)
  let customUrl = url.protocol + '//' + url.hostname + url
    .pathname
    .replace(/\/$/, '')
  for (const paramName of params) {
    const paramValue = queryParams.get(paramName)
    if (paramValue) {
      customUrl = customUrl + '/' + paramValue
    }
  }
  return customUrl
}

window.plausible('pageview', { u: prepareUrl([]) })
