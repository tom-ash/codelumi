import { VISITOR_PRIVACY_MONIT_TRACK } from '../../../../shared/constants/tracks/tracks.js'
import getPureUrl from '../../../../shared/functions/routes/getters/pure-url.js'
import syncRouteData from '../synchronizers/route-data.js'
import genericRouteStateSetter from '../setters/generic-route-state.js'
import getCookieValue from '../../cookies/getters/get-cookie-value.js'
import anyNull from '../../helpers/any-null.js'
import getCookieAsBool from '../../cookies/getters/get-cookie-as-bool.js'
import metaSetter from '../../../../../shared/app/functions/routes/setters/meta.js'

function matchStateToRouteGeneric({
  clientUrl,
  apiUrl,
  pathname
}) {
  if (typeof window === 'undefined') return

  const { changeConsents } = this.props
  const url = getPureUrl(pathname || window.location.pathname)
  const query = window.location.search

  // TODO CHANGE ROUTE
  const route = 'TODO'
  const statisticsConsent = getCookieAsBool(getCookieValue('_pdpaf'))
  const marketingConsent = getCookieAsBool(getCookieValue('_pdpsm'))
  const consents = { statisticsConsent, marketingConsent }
  const renderPrivacyMonit = { [VISITOR_PRIVACY_MONIT_TRACK]: anyNull({ statisticsConsent, marketingConsent }) }
  const { track } = route
  const stateSetter = route.stateSetter || genericRouteStateSetter

  changeConsents(consents)

  syncRouteData.call(this, { apiUrl, url, query, route, requestType: 'ssr' })
  .then(syncedRouteData => {
    const { state, meta } = syncedRouteData
    stateSetter.call(this, state)
    metaSetter({ clientUrl, url, ...route, ...meta })
  })
}

export default matchStateToRouteGeneric
