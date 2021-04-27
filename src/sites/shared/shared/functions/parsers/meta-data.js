import openGraphGenericParser from './open-graph-generic.js'
import schemaOrgGenericParser from './schema-org-generic.js'

function metaDataParser({
  lang,
  title, titleParser, description, descriptionParser, keywords, keywordsParser, image, imageParser,
  openGraph, openGraphSpecificParser,
  schemaOrg, schemaOrgSpecificParser
}) {
  const parsedTitle = titleParser && titleParser({ title, lang }) || title
  const parsedDescription = descriptionParser && descriptionParser({ description, lang }) || description
  const parsedKeywords = keywordsParser && keywordsParser({ keywords, lang }) || keywords
  const parsedImage = imageParser && imageParser({ image, lang }) || image
  const openGraphParser = openGraphSpecificParser || openGraphGenericParser
  const parsedOpenGraph = openGraphParser({ title: parsedTitle, description: parsedDescription, keywords: parsedKeywords, image: parsedImage, ...openGraph })
  const schemaParser = schemaOrgGenericParser || schemaOrgSpecificParser
  const parsedSchemaOrg = schemaParser({ lang, title: parsedTitle, description: parsedDescription, keywords: parsedKeywords, ...schemaOrg })

  return {
    lang,
    title: parsedTitle,
    description: parsedDescription,
    keywords: parsedKeywords,
    openGraph: parsedOpenGraph,
    schemaOrg: parsedSchemaOrg
  }
}

export default metaDataParser
