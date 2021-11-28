function getUrlByRoute(props) {
  const { route, lang, urlComposites } = props
  const { track } = route

  return route.url
}

export default getUrlByRoute
