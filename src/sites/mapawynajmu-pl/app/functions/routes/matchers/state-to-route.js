import matchStateToRouteGeneric from '../../../../../shared/app/functions/routes/matchers/state-to-route-generic'
import clientUrl from '../../../../shared/constants/urls/client'
import apiUrl from '../../../../shared/constants/urls/api'

function matchStateToRoute(props) {
  const { pathname, isSSR } = props

  const customHeaders = {
    'Is-Listings-Obsolete': `${!!window.areListingsObsolete}`,
  }

  window.areListingsObsolete = false

  matchStateToRouteGeneric.call(this, {
    clientUrl,
    apiUrl,
    pathname,
    isSSR,
    customHeaders,
  })
}

export default matchStateToRoute
