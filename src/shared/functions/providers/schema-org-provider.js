const DEFAULT_TYPE = 'WebPage'

export function schemaOrgProvider({
  type,
  language,
  title,
  description,
  keywords
}) {
  const schemaOrg = JSON.stringify({
    "@context": "https://schema.org", 
    "@type": type || DEFAULT_TYPE,
    "inLanguage": language,
    "name": title,
    "description": description,
    "keywords": keywords
  })

  return `<script type="application/ld+json">${schemaOrg}</script>`
}
