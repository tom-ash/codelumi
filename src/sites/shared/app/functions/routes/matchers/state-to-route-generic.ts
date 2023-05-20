import getPureUrl from '../../../../shared/functions/routes/getters/pure-url'
import { syncRouteData } from '../synchronizers/route-data'
import { stateSetter } from '../setters/state-setter'
import { stateResetter } from '../resetters/state-resetter'
import getCookieValue from '../../cookies/getters/get-cookie-value'
import getCookieAsBool from '../../cookies/getters/get-cookie-as-bool'
import metaSetter from '../setters/meta'
import { Dispatch } from 'redux'

interface MatchStateToRouteGeneric {
  (args: {
    clientUrl: string
    apiUrl: string
    isSSR: boolean
    customHeaders?: any // TODO
    dispatch: Dispatch
  }): void
}

export const matchStateToRouteGeneric: MatchStateToRouteGeneric = args => {
  const { clientUrl, apiUrl, isSSR, customHeaders, dispatch } = args

  const url = getPureUrl(window.location.pathname) // TODO: This is not URL!
  const query = window.location.search

  syncRouteData({ apiUrl, url, query, isSSR, customHeaders }).then((syncedRouteData: any) => {
    // TODO: TS!
    const { state, meta } = syncedRouteData

    // @ts-ignore
    if (window.onlyUpdate) {
      // @ts-ignore
      window.onlyUpdate = false

      stateSetter({ state, dispatch })
    } else {
      stateResetter({ state, dispatch })
    }

    metaSetter({ clientUrl, url, ...meta })
  })
}
