const DEFAULT_IMAGE_WIDTH = 1200
const DEFAULT_IMAGE_HEIGHT = 630

export function openGraphProvider({
  title,
  description,
  keywords,
  image,
  imageWidth,
  imageHeight
}) {
  return (
    `<meta property="og:type" content="website" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${description}" />
    <meta property="og:keywords" content="${keywords}" />
    <meta property="og:image" content="${image}" />
    <meta property="og:image:width" content="${imageWidth || DEFAULT_IMAGE_WIDTH}" />
    <meta property="og:image:height" content="${imageHeight || DEFAULT_IMAGE_HEIGHT}" />`
  )
}
