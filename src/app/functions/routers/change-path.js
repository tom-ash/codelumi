import { instantScroll } from '../scrollers/instant-scroll'
import { routes } from '../../../shared/routes/routes'

export function changePath(newRoutes) {
  const { changeApp } = this.props

  const routeObject = {}
  Object.keys(routes).map(route => routeObject[route] = false)

  changeApp({ ...routeObject, ...newRoutes })
  instantScroll()
}
