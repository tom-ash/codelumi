import changeRouteWithHrefGeneric from '../../../../../shared/app/functions/routes/changers/route-with-href-generic.js'
import routes from '../../../../shared/constants/routes/routes.js'

function changeRouteWithHref({ track, lang, changeRoute }) {
  changeRouteWithHrefGeneric({
    track,
    lang,
    changeRoute,
    routes
  })
}

export default changeRouteWithHref
