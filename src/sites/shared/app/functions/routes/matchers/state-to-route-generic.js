import getPureUrl from '../../../../shared/functions/routes/getters/pure-url'
import syncRouteData from '../synchronizers/route-data'
import genericRouteStateSetter from '../setters/generic-route-state'
import getCookieValue from '../../cookies/getters/get-cookie-value'
import getCookieAsBool from '../../cookies/getters/get-cookie-as-bool'
import metaSetter from '../../../../../shared/app/functions/routes/setters/meta'

function matchStateToRouteGeneric({ clientUrl, apiUrl, pathname, isSSR, customHeaders }) {
  if (typeof window === 'undefined') return

  const { changeConsents } = this.props
  const url = getPureUrl(pathname || window.location.pathname)
  const query = window.location.search
  const statisticsConsent = getCookieAsBool(getCookieValue('_pdpaf'))
  const marketingConsent = getCookieAsBool(getCookieValue('_pdpsm'))
  const consents = { statisticsConsent, marketingConsent }

  changeConsents(consents)

  syncRouteData.call(this, { apiUrl, url, query, isSSR, customHeaders }).then(syncedRouteData => {
    const { state, meta } = syncedRouteData

    genericRouteStateSetter.call(this, state)
    metaSetter({ clientUrl, url, ...meta })
  })
}

export default matchStateToRouteGeneric
