import changeRouteGeneric from '../../../../../shared/app/functions/routes/changers/route-generic'
import API_URL from '../../../../shared/constants/urls/api'

const changeRoute: ChangeRoute = function ({ href, withoutScroll, retainQueryParams }) {
  // @ts-ignore
  changeRouteGeneric.call(this, { apiUrl: API_URL, href, withoutScroll, retainQueryParams })
}

export default changeRoute
