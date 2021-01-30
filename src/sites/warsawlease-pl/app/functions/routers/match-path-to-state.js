import { allowedOrigins } from '../../constants/allowed-origins'
import getRouteByRender from '../../../../shared/shared/functions/getters/route-by-render'
import { getPath } from './get-path'

export function matchRouteToRenderAndLanguage() {
  if (
    typeof window === 'undefined' ||
    allowedOrigins.indexOf(window.origin) === -1
  ) return

  const {
    render,
    lang,
    changeApp
  } = this.props

  // TODO FIX ADD ROUTES
  const route = getRouteByRender({ render, lang })
  let path = getPath.apply(this, [route])

  if (path === null) return
  const absolutePath = `${CLIENT_URL}/${path === '/' ? '' : `${path}`}`

  changeApp({ shouldMatchRouteToRenderAndLanguage: false })
  window.history.pushState({}, '', absolutePath)
}
