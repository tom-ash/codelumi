import { instantScroll } from '../scrollers/instant-scroll'
import getRouteData from '../getters/route-data.js'
import getRouteByTrack from '../../../../shared/shared/functions/getters/route-by-track.js'
import routes from '../../../shared/constants/routes/routes.js'
import genericRouteStateSetter from '../setters/generic-route-state.js'
import routeRenders from '../../../shared/constants/routes/renders'
import renderState from '../../constants/render-state'
import { VISITOR_PRIVACY_MONIT_TRACK } from '../../../shared/constants/tracks/tracks.js'
import { anyNull } from '../../../shared/functions/helpers/any-null.js'

export function changeRoute({ href, track }) {
  const { statisticsConsent, marketingConsent, changeRender } = this.props
  const route = getRouteByTrack({ track, routes })
  const stateSetter = route.stateSetter || genericRouteStateSetter
  const renderPrivacyMonit = { [VISITOR_PRIVACY_MONIT_TRACK]: anyNull({ statisticsConsent, marketingConsent }) }

  window.history.pushState({}, '', href.replace(/\/\/$/, '/'))

  changeRender({ ...renderState, ...renderPrivacyMonit, [track]: true, ...routeRenders[track] })
  
  stateSetter && getRouteData.call(this, { url: href, route }).then(routeData => stateSetter.call(this, { ...route, ...routeData }))

  instantScroll()
}
