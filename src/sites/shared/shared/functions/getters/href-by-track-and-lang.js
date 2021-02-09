function getHrefByTrackAndLang({ track, lang, routes }) {
  const route = routes.find(route => route.track === track && route.lang === lang)
  const url = route.url

  return `${CLIENT_URL}/${url === '/' ? '' : url}`
}

export default getHrefByTrackAndLang
