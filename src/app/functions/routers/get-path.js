export function getPath(route) {
  const { pageShowData } = this.props

  if (route) {
    if (route.urlBuilder) return route.urlBuilder.apply(this, [route.lang])
    
    return route.url
  }
  
  const localizedPageShowData = this.languageObjectHandler(pageShowData)
  if (localizedPageShowData) return localizedPageShowData.url
  return null
}
