import getRouteByRender from './route-by-render.js'
import getUrlByRoute from './url-by-route.js'
import { PAGE_SHOW_TRACK } from '../../../../shared/constants/tracks/tracks.js'

function getRouteByLang({ lang, routes }) {
  const { render } = this.props

  const route = getRouteByRender({ render, lang, routes }) || { track: PAGE_SHOW_TRACK }

  return { url: getUrlByRoute.call(this, { route, lang }) }
}

export default getRouteByLang
