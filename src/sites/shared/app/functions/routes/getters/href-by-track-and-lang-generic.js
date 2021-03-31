function getHrefByTrackAndLangGeneric({ clientUrl, track, lang, routes }) {
  const route = routes.find(route => route.track === track && route.lang === lang)
  const url = route.url

  return `${clientUrl}/${url === '/' ? '' : url}`
}

export default getHrefByTrackAndLangGeneric
