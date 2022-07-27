import changeRouteGeneric from '../../../../../shared/app/functions/routes/changers/route-generic.js'
import API_URL from '../../../../shared/constants/urls/api.js'

const changeRoute: ChangeRoute = function({ href, withoutScroll, retainQueryParams }) {
  // TS: TODO
  // 'this' implicitly has type 'any' because it does not have a type annotation.
  // An outer value of 'this' is shadowed by this container.
  // @ts-ignore
  changeRouteGeneric.call(this, { apiUrl: API_URL, href, withoutScroll, retainQueryParams })
}

export default changeRoute