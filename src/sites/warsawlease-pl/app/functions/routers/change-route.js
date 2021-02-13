import { instantScroll } from '../scrollers/instant-scroll'
import getRouteData from '../getters/route-data.js'
import getRouteByTrack from '../../../../shared/shared/functions/getters/route-by-track.js'
import routes from '../../../shared/constants/routes/routes.js'
import genericRouteStateSetter from '../setters/generic-route-state.js'

export function changeRoute({ href, track }) {
  const route = getRouteByTrack({ track, routes })
  const stateSetter = route.stateSetter || genericRouteStateSetter
  const { statisticsConsent, marketingConsent } = this.props
  const consents = { statisticsConsent, marketingConsent }

  console.log('changeRoute')
  console.log(consents)

  window.history.pushState({}, '', href)
  
  stateSetter && getRouteData.call(this, { url: href, route }).then(routeData => stateSetter.call(this, { ...route, ...routeData, ...consents }))

  instantScroll()
}
