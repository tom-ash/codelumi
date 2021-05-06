import { VISITOR_PRIVACY_MONIT_TRACK } from '../../../../shared/constants/tracks/tracks.js'
import getPureUrl from '../../../../shared/functions/routes/getters/pure-url.js'
import getRouteByUrl from '../../../../shared/functions/routes/getters/route-by-url.js'
import syncRouteData from '../synchronizers/route-data.js'
import genericRouteStateSetter from '../setters/generic-route-state.js'
import getCookieValue from '../../cookies/getters/get-cookie-value.js'
import anyNull from '../../helpers/any-null.js'
import getCookieAsBool from '../../cookies/getters/get-cookie-as-bool.js'
import metaSetter from '../../../../../shared/app/functions/routes/setters/meta.js'

function matchStateToRouteGeneric({
  apiUrl,
  routes,
  routeRenders,
  renderState,
  pathname
}) {
  if (typeof window === 'undefined') return

  const { changeRender, changeVisitorConsents } = this.props
  const url = getPureUrl(pathname || window.location.pathname)
  const query = window.location.search
  const route = getRouteByUrl({ url, routes })
  const statisticsConsent = getCookieAsBool(getCookieValue('_pdpaf'))
  const marketingConsent = getCookieAsBool(getCookieValue('_pdpsm'))
  const consents = { statisticsConsent, marketingConsent }
  const renderPrivacyMonit = { [VISITOR_PRIVACY_MONIT_TRACK]: anyNull({ statisticsConsent, marketingConsent }) }
  const { track } = route
  const stateSetter = route.stateSetter || genericRouteStateSetter

  changeVisitorConsents(consents)

  changeRender({ ...renderState, ...renderPrivacyMonit, [track]: true, ...routeRenders[track] })

  syncRouteData.call(this, { apiUrl, url, query, route, requestType: 'ssr' })
  .then(syncedRouteData => {
    const { state, meta } = syncedRouteData
    stateSetter.call(this, state)
    metaSetter({ ...route, ...meta })
  })
}

export default matchStateToRouteGeneric
