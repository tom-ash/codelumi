interface BuildAlternateLangLinkElements {
  (alternateLangLinks: {
    href: string
    hrefLang: Lang
  }[] | null): string
}

export const buildAlternateLangLinkElements: BuildAlternateLangLinkElements = (alternateLangLinks) => {
  const elements: string[] = []

  if (!alternateLangLinks) {
    return ''
  }

  alternateLangLinks.map(alternateLangLink => {
    const { href, hrefLang } = alternateLangLink

    elements.push(`<link rel=”alternate” hreflang=”${hrefLang}” href=”${href}” />`)
  })

  return elements.join('')
}
