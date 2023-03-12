import changeRouteGeneric from '../../../../../shared/app/functions/routes/changers/route-generic'

const changeRoute: ChangeRoute = function ({ href, withoutScroll, retainQueryParams }) {
  changeRouteGeneric({ href, withoutScroll, retainQueryParams })
}

export default changeRoute
