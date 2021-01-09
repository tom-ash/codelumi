export function metaDataParser(metaData) {
  const {
    lang,
    title, titleParser,
    description, descriptionParser,
    keywords, keywordsParser,
    image, imageParser,
    openGraph, openGraphParser,
    schemaOrg, schemaOrgParser
  } = metaData

  return {
    lang,
    title: titleParser && titleParser(metaData) || title,
    description: descriptionParser && descriptionParser(metaData) || description,
    keywords: keywordsParser && keywordsParser(metaData) || keywords,
    image: imageParser && imageParser(metaData) || image,
    openGraph: openGraphParser && openGraphParser(metaData) || openGraph,
    schemaOrg: schemaOrgParser && schemaOrgParser(metaData) || schemaOrg
  }
}
