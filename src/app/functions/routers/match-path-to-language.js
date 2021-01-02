import { getRouteByRender } from '../../../shared/functions/getters/route-by-render'
import { getPath } from './get-path'

export function matchPathToLanguage() {
  const {
    render,
    language
  } = this.props
  const lang = language === 'pl' ? 'en' : 'pl'
  const route = getRouteByRender({ render, lang })

  return getPath.apply(this, [route])
}
