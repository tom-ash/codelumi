import matchStateToRouteGeneric from '../../../../../shared/app/functions/routes/matchers/state-to-route-generic.js'
import routes from '../../../../shared/constants/routes/routes.js'
import routeRenders from '../../../../shared/constants/routes/renders.js'
import renderState from '../../../../shared/constants/routes/renders/state.js'
import clientUrl from '../../../../shared/constants/urls/client.js'
import apiUrl from '../../../../shared/constants/urls/api.js'

function matchStateToRoute({ pathname }) {
  matchStateToRouteGeneric.call(this, {
    clientUrl,
    apiUrl,
    pathname,
    routes,
    routeRenders,
    renderState
  })
}

export default matchStateToRoute
