import getRouteByRender from './route-by-render.js'
import getUrlByRoute from './url-by-route.js'
import { PAGE_SHOW_TRACK } from '../../../../shared/constants/tracks/tracks.js'

function getRouteByLang(props) {
  const route = getRouteByRender(props) || { track: PAGE_SHOW_TRACK }

  return { url: getUrlByRoute({ ...props, route }) }
}

export default getRouteByLang
