export function getUrlFromRoute(route) {
  const { pageShowData } = this.props

  if (route) {
    if (route.urlBuilder) return route.urlBuilder({ ...this.props, lang: [route.lang] })
    
    return route.url
  }
  
  const localizedPageShowData = this.langObjHandler(pageShowData)
  if (localizedPageShowData) return localizedPageShowData.url
  return null
}
