import matchStateToRouteGeneric from '../../../../../shared/app/functions/routes/matchers/state-to-route-generic.js'
import clientUrl from '../../../../shared/constants/urls/client.js'
import apiUrl from '../../../../shared/constants/urls/api.js'

function matchStateToRoute(props) {
  const {
    pathname,
    isSSR
  } = props

  console.log(props)

  console.log("HERE")

  matchStateToRouteGeneric.call(this, {
    clientUrl,
    apiUrl,
    pathname,
    isSSR
  })
}

export default matchStateToRoute
