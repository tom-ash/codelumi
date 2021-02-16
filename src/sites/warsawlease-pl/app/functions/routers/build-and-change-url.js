import getHrefByTrackAndLang from '../../../../shared/shared/functions/getters/href-by-track-and-lang.js'
import routes from '../../../shared/constants/routes/routes.js'

function changeRouteWithHref({ track, lang, changeUrl }) {
  const href = getHrefByTrackAndLang({ track, lang, routes })
  
  changeUrl({ href })
}

export default changeRouteWithHref
