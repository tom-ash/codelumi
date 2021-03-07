import changeRouteWithHrefGeneric from '../../../../../shared/app/functions/routes/changers/route-with-href-generic.js'
import routes from '../../../../shared/constants/routes/routes.js'
import CLIENT_URL from '../../../../shared/constants/urls/client.js'

function changeRouteWithHref({ track, lang, changeRoute }) {
  changeRouteWithHrefGeneric({
    clientUrl: CLIENT_URL,
    track,
    lang,
    changeRoute,
    routes
  })
}

export default changeRouteWithHref
