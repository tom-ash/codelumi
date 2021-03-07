import getHrefByTrackAndLang from '../../../../../shared/app/functions/routes/getters/href-by-track-and-lang.js'

function changeRouteWithHrefGeneric({ clientUrl, track, lang, routes, changeRoute }) {
  const href = getHrefByTrackAndLang({ clientUrl, track, lang, routes })
  
  changeRoute({ href })
}

export default changeRouteWithHrefGeneric
