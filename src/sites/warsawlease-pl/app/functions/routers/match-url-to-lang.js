import routes from '../../../shared/constants/routes/routes.js'
import getRouteByRender from '../../../../shared/shared/functions/getters/route-by-render'
import { getUrlFromRoute } from './get-url-from-route'
import { PAGE_SHOW_TRACK } from '../../../../shared/shared/constants/tracks/tracks.js'

function matchUrlToLang({ lang }) {
  const { render } = this.props

  const route = getRouteByRender({ render, lang, routes }) || { track: PAGE_SHOW_TRACK }

  return { url: getUrlFromRoute.call(this, { route, lang }) }
}

export default matchUrlToLang
