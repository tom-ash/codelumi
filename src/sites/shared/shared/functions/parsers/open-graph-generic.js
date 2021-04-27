const DEFAULT_IMAGE_WIDTH = 1200
const DEFAULT_IMAGE_HEIGHT = 630

function openGraphGenericParser({
  title, description, keywords,
  image, imageWidth, imageHeight
}) {
  const ogType = { name: 'og:type', value: 'website' }
  const ogTitle = { name: 'og:title', value: title }
  const ogDescription = { name: 'og:description', value: description }
  const ogKeywords = { name: 'og:keywords', value: keywords }
  const ogImage = { name: 'og:image', value: image }
  const ogImageWidth = { name: 'og:image:width', value: imageWidth || DEFAULT_IMAGE_WIDTH }
  const ogImageHeight = { name: 'og:image:height', value: imageHeight || DEFAULT_IMAGE_HEIGHT }

  return [ogType, ogTitle, ogDescription, ogKeywords, ogImage, ogImageWidth, ogImageHeight]
}

export default openGraphGenericParser
