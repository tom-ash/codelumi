const DEFAULT_TYPE = 'WebPage'

export function schemaOrgProvider({
  type,
  language,
  title,
  description,
  keywords
}) {
  return (
    `
    <script type="application/ld+json">
      {
        "@context": "https://schema.org", 
        "@type": "${type || DEFAULT_TYPE}",
        "inLanguage": "${language}",
        "name": "${title}",
        "description": "${description}",
        "keywords": "${keywords}"
      }
    </script>
    `
  )
}
