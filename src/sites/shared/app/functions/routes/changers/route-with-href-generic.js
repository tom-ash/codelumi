import getHrefByTrackAndLang from '../../../../../shared/app/functions/routes/getters/href-by-track-and-lang.js'

function changeRouteWithHrefGeneric({ track, lang, routes, changeRoute }) {
  const href = getHrefByTrackAndLang({ track, lang, routes })
  
  changeRoute({ href })
}

export default changeRouteWithHrefGeneric
