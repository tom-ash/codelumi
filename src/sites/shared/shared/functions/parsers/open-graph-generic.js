const DEFAULT_IMAGE_WIDTH = 1200
const DEFAULT_IMAGE_HEIGHT = 630

function openGraphGenericParser({
  title, description, keywords,
  image, imageWidth, imageHeight,
  locale, localeAlts,
  siteName
}) {
  const ogType = { name: 'og:type', value: 'website' }
  const ogTitle = { name: 'og:title', value: title }
  const ogDescription = { name: 'og:description', value: description }
  const ogKeywords = { name: 'og:keywords', value: keywords }
  const ogImage = { name: 'og:image', value: image }
  const ogImageWidth = { name: 'og:image:width', value: imageWidth || DEFAULT_IMAGE_WIDTH }
  const ogImageHeight = { name: 'og:image:height', value: imageHeight || DEFAULT_IMAGE_HEIGHT }
  const ogLocale = { name: 'og:locale', value: locale }
  const ogLocaleAlts = localeAlts.map(localeAlt => ({ name: 'og:locale:alternate', value: localeAlt }))
  const ogSiteName = { name: 'og:site_name', value: siteName }

  return [ogSiteName, ogType, ogTitle, ogLocale, ...ogLocaleAlts, ogDescription, ogKeywords, ogImage, ogImageWidth, ogImageHeight]
}

export default openGraphGenericParser
