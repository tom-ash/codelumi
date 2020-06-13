import { instantScroll } from '../scrollers/instant-scroll'
import { emptyRoutes } from '../../../shared/routes/routes'

export function changePath(newRoutes) {
  const { changeApp } = this.props

  changeApp({ showNotFound: false, ...emptyRoutes, ...newRoutes })
  instantScroll()
}
