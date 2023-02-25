import matchStateToRouteGeneric from '../../../../../shared/app/functions/routes/matchers/state-to-route-generic'
import clientUrl from '../../../../shared/constants/urls/client'
import apiUrl from '../../../../shared/constants/urls/api'

function matchStateToRoute({ pathname }) {
  matchStateToRouteGeneric.call(this, {
    clientUrl,
    apiUrl,
    pathname,
  })
}

export default matchStateToRoute
