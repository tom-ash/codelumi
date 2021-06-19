const urlify = text => {
  const url = text.toLowerCase().split(' ').join('-').replace(',', '').replace('&', 'and')
  
  return url
}

export default urlify
