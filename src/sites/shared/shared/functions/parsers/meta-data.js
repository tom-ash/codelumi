import openGraphGenericParser from './open-graph-generic.js'

function metaDataParser({
  lang,
  title,
  description,
  keywords,
  image,
  ogLocale,
  ogLocaleAlts,
  openGraph,
  siteName,
  canonicalUrl,
  schema
}) {
  const parsedOpenGraph = openGraphGenericParser({ title, description, keywords, image, locale: ogLocale, localeAlts: ogLocaleAlts, siteName, canonicalUrl, ...openGraph })

  return {
    lang,
    title,
    description,
    keywords,
    openGraph: parsedOpenGraph,
    schema
  }
}

export default metaDataParser
