import changeRouteGeneric from '../../../../../shared/app/functions/routes/changers/route-generic.js'
import API_URL from '../../../../shared/constants/urls/api.js'

function changeRoute({ href, withoutScroll, retainQueryParams }) {
  changeRouteGeneric.call(this, { apiUrl: API_URL, href, withoutScroll, retainQueryParams })
}

export default changeRoute