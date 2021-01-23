import { getRouteByRender } from '../../../shared/functions/getters/route-by-render'
import { getPath } from './get-path'

export function matchPathToLanguage() {
  const {
    render,
    lang
  } = this.props
  const route = getRouteByRender({ render, lang: lang === 'pl' ? 'en' : 'pl' })

  return getPath.apply(this, [route])
}
