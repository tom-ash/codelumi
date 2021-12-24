const buildAnchor = matchArray => {
  const anchorData = {}
  
  matchArray.map(dataPair => {
    const [key, value] = dataPair.split(': ')
    anchorData[key] = value
  })

  const { href, hreflang, text, title } = anchorData

  return (
    `<a href="${href}" target="_blank" title="${title}" hreflang="${hreflang}">${text}</a>`
  )
}

export default buildAnchor
