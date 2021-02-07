function getHrefByTrackAndLang({ track, lang, routes }) {
  const route = routes.find(route => route.track === track && route.lang === lang)

  return `${CLIENT_URL}/${route.url}`
}

export default getHrefByTrackAndLang
