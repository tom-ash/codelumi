import { allowedOrigins } from '../../constants/allowed-origins'
import routes from '../../../shared/constants/routes/routes'
import { getPath } from './get-path'

export function matchRouteToRenderAndLanguage() {
  if (
    typeof window === 'undefined' ||
    allowedOrigins.indexOf(window.origin) === -1
  ) return

  const {
    language,
    render,
    changeApp
  } = this.props

  const route = routes.find(route => render[route.track] && route.lang === language)

  let path = getPath.apply(this, [route])
  if (path === null) return

  changeApp({ shouldMatchRouteToRenderAndLanguage: false })
  window.history.pushState({ path }, '', path)
}
