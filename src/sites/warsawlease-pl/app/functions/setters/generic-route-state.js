import routeRenders from '../../../shared/constants/routes/renders'
import renderState from '../../constants/render-state'
import { VISITOR_PRIVACY_MONIT_TRACK } from '../../../shared/constants/tracks/tracks.js'
import { anyNull } from '../../../shared/functions/helpers/any-null.js'

function genericRouteStateSetter(routeData) {
  const { statisticsConsent, marketingConsent, track, lang } = routeData
  const { changeRender } = this.props

  if (anyNull({ statisticsConsent, marketingConsent })) renderState[VISITOR_PRIVACY_MONIT_TRACK] = true

  changeRender({ ...renderState, [track]: true, ...routeRenders[track] })
}

export default genericRouteStateSetter
