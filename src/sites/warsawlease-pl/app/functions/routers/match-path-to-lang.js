import routes from '../../../shared/constants/routes/routes.js'
import getRouteByRender from '../../../../shared/shared/functions/getters/route-by-render'
import { getPath } from './get-path'

export function matchPathToLanguage() {
  const {
    render,
    lang
  } = this.props

  const route = getRouteByRender({ render, lang: lang === 'pl' ? 'en' : 'pl', routes })

  return { route, url: getPath.apply(this, [route]) }
}
