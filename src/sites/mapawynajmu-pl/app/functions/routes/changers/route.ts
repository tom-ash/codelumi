import changeRouteGeneric from '../../../../../shared/app/functions/routes/changers/route-generic.js'
import API_URL from '../../../../shared/constants/urls/api.js'

const changeRoute: ChangeRoute = function({ href, withoutScroll, retainQueryParams }) {
  changeRouteGeneric.call(this, { apiUrl: API_URL, href, withoutScroll, retainQueryParams })
}

export default changeRoute