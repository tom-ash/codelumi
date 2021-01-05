import { getPureUrl } from '../../../shared/functions/getters/get-pure-url'
import { getRoute } from '../../../shared/functions/getters/get-route'
import routeRenders from '../../../shared/constants/routes/renders'
import { renderState } from '../../constants/render-state'
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
  const route = getRoute(url)

  if (route) {
    const {
      track,
      lang: language
    } = route
  
    changeApp({ language })
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
      changeApp({ language: json.language })
      changePageShowData(json)
      changeRender({ [PAGE_TRACK]: true, [PAGE_SHOW_TRACK]: true })
    })
    .catch(error => {
      changeApp({ language: 'pl' })
      changeRender({ [PAGE_TRACK]: true, [PAGE_NOT_FOUND_TRACK]: true })
    })
  }
}
