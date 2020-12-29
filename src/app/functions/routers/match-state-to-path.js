import routes from '../../../shared/constants/routes/routes'
import routeRenders from '../../../shared/constants/routes/renders'

export function matchRenderToRoute({ popState }) {
  if (typeof window === 'undefined') return

  const {
    changeApp,
    changeRender
  } = this.props

  const path = window.location.pathname
  
  const route = routes.find(route => {
    const { url: routeUrl } = route
    const pathUrl = path === '/' ? '/' : path.replace(/^\/|\/$/g, '')

    if (typeof routeUrl === 'string') {
      return pathUrl === routeUrl
    } else {
      return pathUrl.match(routeUrl)
    }
  })

  const {
    track,
    lang: language
  } = route

  changeApp({ language })
  changeRender({ [track]: true, ...routeRenders[track] })
}
