export function openGraphProvider({
  title,
  description,
  image,
  imageWidth,
  imageHeight
}) {
  return (
    `
    <meta property="og:type" content="website" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${description}" />
    <meta property="og:image" content="${image}" />
    <meta property="og:image:width" content="${imageWidth}" />
    <meta property="og:image:height" content="${imageHeight}" />
    `
  )
}
