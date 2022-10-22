import getPureUrl from '../../../../shared/functions/routes/getters/pure-url.js'

const replaceOpenGraph = openGraph => {
  const elements = document.querySelectorAll(`meta[property^="og"]`)

  elements.forEach(element => element.remove())

  document.head.innerHTML = document.head.innerHTML + openGraph
}

function metaSetter(meta) {
  const { clientUrl, url, canonicalUrl, schema, openGraph, lang, title, description, keywords } = meta
  const canonicalPath = typeof canonicalUrl === 'string' ? canonicalUrl : url

  document.documentElement.lang = lang
  document.title = title
  document.querySelector('meta[name="description"]').setAttribute('content', description)
  document.querySelector('meta[name="keywords"]').setAttribute('content', keywords)
  document.querySelector('link[rel="canonical"]').setAttribute('href', getPureUrl(`${clientUrl}/${canonicalPath}`))

  replaceOpenGraph(openGraph)

  document.querySelector(`script[type="application/ld+json"]`).innerHTML = schema
}

export default metaSetter
