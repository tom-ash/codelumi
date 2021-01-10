const DEFAULT_TYPE = 'WebPage'

export function schemaOrgProvider({
  type,
  lang,
  title,
  description,
  keywords
}) {
  const schemaOrg = JSON.stringify({
    "@context": "https://schema.org", 
    "@type": type || DEFAULT_TYPE,
    "inLanguage": lang,
    "name": title,
    "description": description,
    "keywords": keywords
  })

  return `<script type="application/ld+json">${schemaOrg}</script>`
}
