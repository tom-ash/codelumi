import matchStateToRouteGeneric from '../../../../../shared/app/functions/routes/matchers/state-to-route-generic.js'
import routes from '../../../../shared/constants/routes/routes.js'
import routeRenders from '../../../../shared/constants/routes/renders.js'
import renderState from '../../../../shared/constants/routes/renders/state.js'
import API_URL from '../../../../shared/constants/urls/api.js'

function matchStateToRoute({ pathname }) {
  matchStateToRouteGeneric.call(this, {
    apiUrl: API_URL,
    pathname,
    routes,
    routeRenders,
    renderState
  })
}

export default matchStateToRoute
