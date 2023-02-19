interface OpenGraphProps {
  [key: string]: string | string[]
  locales: string[]
}

export const openGraphBuilder = (props: OpenGraphProps) => {
  let openGraph = ''

  for (const propKey in props) {
    if (propKey === 'locales' || propKey === 'siteName') continue

    openGraph += `<meta property=\"og:${propKey}\" content=\"${props[propKey]}\"/>`
  }

  openGraph += `<meta property=\"og:site_name\" content=\"${props.siteName}\"/>`

  const locales = props.locales

  if (locales) {
    locales.map(locale => {
      openGraph += `<meta property=\"og:locale:alternate" content=\"${locale}\"/>`
    })
  }

  return openGraph
}
