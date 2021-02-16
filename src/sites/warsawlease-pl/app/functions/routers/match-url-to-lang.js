import routes from '../../../shared/constants/routes/routes.js'
import getRouteByRender from '../../../../shared/shared/functions/getters/route-by-render'
import { getUrlFromRoute } from './get-url-from-route'

function matchUrlToLang() {
  const { render, lang } = this.props

  const route = getRouteByRender({ render, lang: lang === 'pl' ? 'en' : 'pl', routes })

  return { route, url: getUrlFromRoute.apply(this, [route]) }
}

export default matchUrlToLang
