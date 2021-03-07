import { VISITOR_PRIVACY_MONIT_TRACK } from '../../../../shared/constants/tracks/tracks.js'
import getPureUrl from '../../../../shared/functions/routes/getters/pure-url.js'
import getRouteByUrl from '../../../../shared/functions/routes/getters/route-by-url.js'
import syncRouteData from '../synchronizers/route-data.js'
import genericRouteStateSetter from '../setters/generic-route-state.js'
import { getCookieValue } from '../../../../../warsawlease-pl/app/functions/cookie-handlers.js'
import { anyNull } from '../../../../../warsawlease-pl/shared/functions/helpers/any-null.js'
import getCookieAsBool from '../../cookies/getters/get-cookie-as-bool.js'

function matchStateToRouteGeneric({
  routes,
  routeRenders,
  renderState,
  pathname
}) {

  console.log("HERE")
  console.log(this)

  if (typeof window === 'undefined') return

  const { changeRender, changeVisitorPrivacySettings } = this.props
  const url = getPureUrl(pathname || window.location.pathname)
  const route = getRouteByUrl({ url, routes })
  const statisticsConsent = getCookieAsBool(getCookieValue('_pdpaf'))
  const marketingConsent = getCookieAsBool(getCookieValue('_pdpsm'))
  const consents = { statisticsConsent, marketingConsent }
  const renderPrivacyMonit = { [VISITOR_PRIVACY_MONIT_TRACK]: anyNull({ statisticsConsent, marketingConsent }) }

  changeVisitorPrivacySettings(consents)

  const { track } = route
  const stateSetter = route.stateSetter || genericRouteStateSetter
  
  changeRender({ ...renderState, ...renderPrivacyMonit, [track]: true, ...routeRenders[track] })

  syncRouteData.call(this, { url, route, requestType: 'ssr' })
  .then(routeData => stateSetter.call(this, { routeData: { ...route, ...routeData, ...consents} }))
}

export default matchStateToRouteGeneric
