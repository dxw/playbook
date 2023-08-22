const captureAllPageViews = (paramsToRegister) => {
  definePlausibleFunction()
  window.plausible('pageview', { u: prepareUrl(paramsToRegister) })
}

const definePlausibleFunction = () => {
  window.plausible = window.plausible || function () {
    (window.plausible.q = window.plausible.q || []).push(arguments)
  }
}

const prepareUrl = (paramsToRegister) => {
  const url = new URL(window.location.href)
  const queryParams = new URLSearchParams(window.location.search)
  let customUrl = url.protocol + '//' + url.hostname + url
    .pathname
    .replace(/\/$/, '')
  for (const paramName of paramsToRegister) {
    const paramValue = queryParams.get(paramName)?.split(' ').join('+')

    if (paramValue) {
      customUrl = customUrl + '/' + paramValue
    }
  }
  return customUrl
}

captureAllPageViews(['query'])
