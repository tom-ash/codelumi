import { VISITOR_PRIVACY_MONIT_TRACK, PAGE_TRACK, PAGE_SHOW_TRACK, PAGE_NOT_FOUND_TRACK } from '../../../shared/constants/tracks/tracks'
import routes from '../../../shared/constants/routes/routes.js'
import routeRenders from '../../../shared/constants/routes/renders'
import renderState from '../../constants/render-state'
import getPureUrl from '../../../../shared/shared/functions/getters/pure-url'
import getRouteByUrl from '../../../../shared/shared/functions/getters/route-by-url'
import getRouteData from '../getters/route-data.js'
import genericRouteStateSetter from '../setters/generic-route-state.js'
import { getCookieValue } from '../cookie-handlers.js'
import { anyNull } from '../../../shared/functions/helpers/any-null.js'

function matchStateToRoute() {
  if (typeof window === 'undefined') return

  const { changeApp, changeRender, changeVisitorPrivacySettings } = this.props
  const url = getPureUrl(window.location.pathname)
  const route = getRouteByUrl({ url, routes })
  const statisticsConsent = getCookieAsBool(getCookieValue('_pdpaf'))
  const marketingConsent = getCookieAsBool(getCookieValue('_pdpsm'))
  const consents = { statisticsConsent, marketingConsent }
  const renderPrivacyMonit = { [VISITOR_PRIVACY_MONIT_TRACK]: anyNull({ statisticsConsent, marketingConsent }) }

  if (route) {
    const { track, lang } = route
    const stateSetter = route.stateSetter || genericRouteStateSetter
    
    changeApp({ lang })
    changeVisitorPrivacySettings(consents)
    changeRender({ ...renderState, ...renderPrivacyMonit, [track]: true, ...routeRenders[track] })
    getRouteData.call(this, { url, route, requestType: 'ssr' }).then(routeData => stateSetter.call(this, { ...route, ...routeData, ...consents}))
  } else {
    const { changePageShowData } = this.props

    fetch(`${API_URL}/posts/urls/${url}`, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      if (response.ok) return response.json()
  
      throw new Error('Page Not Found')
    })
    .then(json => {
      changeApp({ lang: json.lang })
      changePageShowData(json)
      changeRender({ ...renderPrivacyMonit, [PAGE_TRACK]: true, [PAGE_SHOW_TRACK]: true })
    })
    .catch(error => {
      changeApp({ lang: 'pl' })
      changeRender({ [PAGE_TRACK]: true, [PAGE_NOT_FOUND_TRACK]: true })
    })
  }
}

export default matchStateToRoute

function getCookieAsBool(cookieValue) {
  switch(cookieValue) {
    case 'true': return true
    case 'false': return false
    default: return null
  }
}
