const buildAnchor = matchArray => {
  let properties = ''
  let text

  matchArray.map(dataPair => {
    const [key, value] = dataPair.split(': ')

    if (key !== 'text') {
      properties += ` ${key}="${value}"`
    } else {
      text = value
    }
  })

  return (
    `<a ${properties}>${text}</a>`
  )
}

export default buildAnchor
