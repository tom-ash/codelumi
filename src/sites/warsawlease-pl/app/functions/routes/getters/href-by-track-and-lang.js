import getHrefByTrackAndLangGeneric from '../../../../../shared/app/functions/routes/getters/href-by-track-and-lang-generic.js'
import clientUrl from '../../../../shared/constants/urls/client.js'
import routes from '../../../../shared/constants/routes/routes.js'

function getHrefByTrackAndLang({ track, lang }) {
  return getHrefByTrackAndLangGeneric({ clientUrl, track, lang, routes })
}

export default getHrefByTrackAndLang
  