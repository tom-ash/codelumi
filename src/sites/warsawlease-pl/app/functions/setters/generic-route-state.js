import routeRenders from '../../../shared/constants/routes/renders'
import renderState from '../../constants/render-state'
import { VISITOR_PRIVACY_MONIT_TRACK } from '../../../shared/constants/tracks/tracks.js'
import { anyNull } from '../../../shared/functions/helpers/any-null.js'

function genericRouteStateSetter(routeData) {
  const { statisticsConsent, marketingConsent, track } = routeData
  const { changeRender } = this.props
  const renderPrivacyMonit = { [VISITOR_PRIVACY_MONIT_TRACK]: anyNull({ statisticsConsent, marketingConsent }) }

  changeRender({ ...renderState, ...renderPrivacyMonit, [track]: true, ...routeRenders[track] })
}

export default genericRouteStateSetter
