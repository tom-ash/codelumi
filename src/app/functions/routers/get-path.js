export function getPath(route) {
  const {
    renderPageNotFound,
    pageShowData
  } = this.props

  if (route) {
    if (route.buildUrl) return route.buildUrl.apply(this)
    return route.url
  }
  
  if (renderPageNotFound) return null
  return this.languageObjectHandler(pageShowData).url
}
