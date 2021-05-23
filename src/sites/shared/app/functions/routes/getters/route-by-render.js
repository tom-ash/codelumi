function getRouteByRender({
  render,
  lang,
  routes
}) {
  return routes.find(route => render[route.track] && route.lang === lang)
}

export default getRouteByRender
