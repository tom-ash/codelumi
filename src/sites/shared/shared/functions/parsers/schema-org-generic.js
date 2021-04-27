const DEFAULT_TYPE = 'WebPage'

function schemaOrgGenericParser({
  type, lang, title, description, keywords
}) {
  return (
    JSON.stringify({
      "@context": "https://schema.org", 
      "@type": type || DEFAULT_TYPE,
      "inLanguage": lang,
      "name": title,
      "description": description,
      "keywords": keywords
    })
  )
}

export default schemaOrgGenericParser
