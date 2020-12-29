import { allowedOrigins } from '../../constants/allowed-origins'
import { provideTitle } from '../../../shared/functions/providers/provide-title'
import { buildLink } from '../../components/announcement/functions/build-link'

import routes from '../../../shared/constants/routes/routes'

export function matchPathToState() {
  if (
    typeof window === 'undefined' ||
    allowedOrigins.indexOf(window.origin) === -1
  ) return

  console.log("matchPathToState")

  const {
    language,
    render,
    changeApp
  } = this.props

  const path = window.location.pathname
  const route = routes.find(route => render[route.track] && route.lang === language)
  const newPath = route.url

  changeApp({ shouldMatchRouteToRender: false })

  window.history.pushState(
    { path: newPath },
    '',
    newPath
  )
}
