function buildAlternateLinks({ links, langs, buildUrl }) {
  if (!links || !langs) return ''
  if (!langs && langs.length < 2) return ''

  let alternates = ''

  langs.map(lang => {
    const alternateLink = links[`current/${lang}`]
    if (alternateLink) {
      const { path } = alternateLink
      const href = buildUrl({ path })
    
      alternates += `<link rel="alternate" hreflang="${lang}" href="${href}" />`
    }
  })

  return alternates
}

export default buildAlternateLinks
