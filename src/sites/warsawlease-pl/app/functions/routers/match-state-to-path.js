import getPureUrl from '../../../../shared/shared/functions/getters/pure-url'
import getRouteByUrl from '../../../../shared/shared/functions/getters/route-by-url'
import routes from '../../../shared/constants/routes/routes.js'
import routeRenders from '../../../shared/constants/routes/renders'
import renderState from '../../constants/render-state'
import {
  PAGE_TRACK,
  PAGE_SHOW_TRACK,
  PAGE_NOT_FOUND_TRACK
} from '../../../shared/constants/tracks/tracks'

export function matchRenderToRoute() {
  if (typeof window === 'undefined') return

  const {
    changeApp,
    changeRender
  } = this.props

  const url = getPureUrl(window.location.pathname)
  const route = getRouteByUrl({ url, routes })

  if (route) {
    const {
      track,
      lang
    } = route
  
    changeApp({ lang })
    changeRender({ ...renderState, [track]: true, ...routeRenders[track] })
  } else {
    const {
      changePageShowData
    } = this.props

    fetch(`${API_URL}/posts/urls/${url}`, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      if (response.ok) return response.json()
  
      throw new Error('Page Not Found')
    })
    .then(json => {
      changeApp({ lang: json.lang })
      changePageShowData(json)
      changeRender({ [PAGE_TRACK]: true, [PAGE_SHOW_TRACK]: true })
    })
    .catch(error => {
      changeApp({ lang: 'pl' })
      changeRender({ [PAGE_TRACK]: true, [PAGE_NOT_FOUND_TRACK]: true })
    })
  }
}
