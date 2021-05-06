import metaDataParser from '../../../../shared/functions/parsers/meta-data.js'

function metaSetter(meta) {
  const parsedMeta = metaDataParser(meta)
  const { lang, title, description, keywords, openGraph, schemaOrg } = parsedMeta

  document.documentElement.lang = lang
  document.title = title
  document.querySelector('meta[name="description"]').setAttribute("content", description)
  document.querySelector('meta[name="keywords"]').setAttribute("content", keywords)

  openGraph.map(({ name, value }) => {
    document.querySelector(`meta[property="${name}"]`).setAttribute("content", value)
  })

  document.querySelector(`script[type="application/ld+json"]`).innerHTML = schemaOrg
}

export default metaSetter
