import getHrefByTrackAndLangGeneric from '../getters/href-by-track-and-lang-generic.js'

function changeRouteWithHrefGeneric({ clientUrl, track, lang, routes, changeRoute }) {
  const href = getHrefByTrackAndLangGeneric({ clientUrl, track, lang, routes })
  
  changeRoute({ href })
}

export default changeRouteWithHrefGeneric
