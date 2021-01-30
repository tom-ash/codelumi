function metaDataParser({
  lang,
  title, titleParser,
  description, descriptionParser,
  keywords, keywordsParser,
  image, imageParser,
  openGraph, openGraphParser,
  schemaOrg, schemaOrgParser
}) {
  return {
    lang,
    title: titleParser && titleParser({ title, lang }) || title,
    description: descriptionParser && descriptionParser({ description, lang }) || description,
    keywords: keywordsParser && keywordsParser({ keywords, lang }) || keywords,
    image: imageParser && imageParser({ image, lang }) || image,
    openGraph: openGraphParser && openGraphParser({ openGraph, lang }) || openGraph,
    schemaOrg: schemaOrgParser && schemaOrgParser({ schemaOrg, lang }) || schemaOrg
  }
}

export default metaDataParser
