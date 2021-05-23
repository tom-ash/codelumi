function getRouteByTrackAndLang({ track, routes, lang }) {
  return routes.find(route => route.track === track && route.lang === lang)
}

export default getRouteByTrackAndLang
