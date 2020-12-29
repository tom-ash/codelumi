import { allowedOrigins } from '../../constants/allowed-origins'
import { provideTitle } from '../../../shared/functions/providers/provide-title'
import { buildLink } from '../../components/announcement/functions/build-link'

import routes from '../../../shared/constants/routes/routes'

export function matchPathToState() {
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
  const { url: newPath } = route

  changeApp({ shouldMatchRouteToRender: false })
  window.history.pushState(
    { path: newPath },
    '',
    newPath
  )
}
