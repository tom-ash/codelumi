import { getRouteByRender } from '../../../../shared/shared/functions/getters/route-by-render'
import { getPath } from './get-path'

export function matchPathToLanguage() {
  const {
    render,
    lang
  } = this.props

  // TODO FIX
  const route = getRouteByRender({ render, lang: lang === 'pl' ? 'en' : 'pl' })

  return getPath.apply(this, [route])
}
