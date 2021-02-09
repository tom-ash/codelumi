import getHrefByTrackAndLang from '../../../../shared/shared/functions/getters/href-by-track-and-lang.js'
import routes from '../../../shared/constants/routes/routes.js'

function changeRouteWithHref({ track, lang, changeRoute }) {
  const href = getHrefByTrackAndLang({ track, lang, routes })
  
  changeRoute({ href, track })
}

export default changeRouteWithHref
