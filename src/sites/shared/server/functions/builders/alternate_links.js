function buildAlternateLinks({ links, langs, lang, buildUrl }) {
  const alternateLangs = langs.filter(language => language !== lang)
  if (!alternateLangs.length) return ''

  let alternates = ''

  alternateLangs.map(language => {
    const alternateLink = links[`current/${language}`]
    if (alternateLink) {
      const { path } = alternateLink
      const href = buildUrl({ path })
    
      alternates += `<link rel="alternate" hreflang="${language}" href="${href}" />`
    }
  })

  return alternates
}

export default buildAlternateLinks