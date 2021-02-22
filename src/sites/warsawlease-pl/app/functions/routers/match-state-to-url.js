import { VISITOR_PRIVACY_MONIT_TRACK } from '../../../shared/constants/tracks/tracks'
import routes from '../../../shared/constants/routes/routes.js'
import routeRenders from '../../../shared/constants/routes/renders'
import renderState from '../../constants/render-state'
import getPureUrl from '../../../../shared/shared/functions/getters/pure-url'
import getRouteByUrl from '../../../../shared/shared/functions/getters/route-by-url'
import getRouteData from '../getters/route-data.js'
import genericRouteStateSetter from '../../../../shared/app/functions/setters/generic-route-state.js'
import { getCookieValue } from '../cookie-handlers.js'
import { anyNull } from '../../../shared/functions/helpers/any-null.js'

function matchStateToUrl({ pathname }) {
  if (typeof window === 'undefined') return

  const { changeRender, changeVisitorPrivacySettings } = this.props
  const url = getPureUrl(pathname || window.location.pathname)
  const route = getRouteByUrl({ url, routes })
  const statisticsConsent = getCookieAsBool(getCookieValue('_pdpaf'))
  const marketingConsent = getCookieAsBool(getCookieValue('_pdpsm'))
  const consents = { statisticsConsent, marketingConsent }
  const renderPrivacyMonit = { [VISITOR_PRIVACY_MONIT_TRACK]: anyNull({ statisticsConsent, marketingConsent }) }

  changeVisitorPrivacySettings(consents)

  if (route) {
    const { track } = route
    const stateSetter = route.stateSetter || genericRouteStateSetter
    
    changeRender({ ...renderState, ...renderPrivacyMonit, [track]: true, ...routeRenders[track] })
    getRouteData.call(this, { url, route, requestType: 'ssr' })
    .then(routeData => stateSetter.call(this, { routeData: { ...route, ...routeData, ...consents} }))
  }
}

export default matchStateToUrl

function getCookieAsBool(cookieValue) {
  switch(cookieValue) {
    case 'true': return true
    case 'false': return false
    default: return null
  }
}
