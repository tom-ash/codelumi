import matchStateToRouteGeneric from '../../../../../shared/app/functions/routes/matchers/state-to-route-generic.js'
import clientUrl from '../../../../shared/constants/urls/client.js'
import apiUrl from '../../../../shared/constants/urls/api.js'

function matchStateToRoute({ pathname }) {
  matchStateToRouteGeneric.call(this, {
    clientUrl,
    apiUrl,
    pathname
  })
}

export default matchStateToRoute
