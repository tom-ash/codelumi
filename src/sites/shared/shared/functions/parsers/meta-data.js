import openGraphGenericParser from './open-graph-generic.js'
import schemaOrgGenericParser from './schema-org-generic.js'

function metaDataParser({
  lang,
  title,
  description,
  keywords,
  image,
  ogLocale,
  ogLocaleAlts,
  openGraph,
  schemaOrg,
  siteName
}) {
  const parsedOpenGraph = openGraphGenericParser({ title, description, keywords, image, locale: ogLocale, localeAlts: ogLocaleAlts, siteName, ...openGraph })
  const parsedSchemaOrg = schemaOrgGenericParser({ lang, title, description, keywords, locale: ogLocale, localeAlts: ogLocaleAlts, ...schemaOrg })

  return {
    lang,
    title,
    description,
    keywords,
    openGraph: parsedOpenGraph,
    schemaOrg: parsedSchemaOrg
  }
}

export default metaDataParser
