import openGraphGenericParser from './open-graph-generic.js'
import schemaOrgGenericParser from './schema-org-generic.js'

function metaDataParser({
  lang,
  title,
  description,
  keywords,
  image,
  openGraph,
  schemaOrg
}) {
  const parsedOpenGraph = openGraphGenericParser({ title, description, keywords, image, ...openGraph })
  const parsedSchemaOrg = schemaOrgGenericParser({ lang, title, description, keywords, ...schemaOrg })

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
