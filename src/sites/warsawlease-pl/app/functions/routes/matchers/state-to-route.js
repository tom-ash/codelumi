import matchStateToRouteGeneric from '../../../../../shared/app/functions/routes/matchers/state-to-route-generic.js'
import routes from '../../../../shared/constants/routes/routes.js'
import routeRenders from '../../../../shared/constants/routes/renders.js'
import renderState from '../../../../shared/constants/routes//renders/state.js'

function matchStateToRoute({ pathname }) {
  matchStateToRouteGeneric.call(this, {
    pathname,
    routes,
    routeRenders,
    renderState
  })
}

export default matchStateToRoute
