import { instantScroll } from './scrollers/instant-scroll'
import { routes } from '../constants/routes'
import { routeMatchers } from '../constants/route-matchers'

export function changeRoute(newRoutes) {
  const { changeApp } = this.props

  changeApp({ ...routes, ...newRoutes })
  instantScroll()
}

export function checkRoute() {
  const { changeApp } = this.props
  const path = window.location.pathname
  
  for (let [route, matcher] of Object.entries(routeMatchers)) {
    if (path.match(matcher.route)) {
      // TODO set special values
      return changeApp({ [route]: true })
    }
  }
}

export function popStateRoute() {
  if (window.location.pathname === '/') {
    this.changeRoute(null, '/')
  }
  if (/^\d+$/.test(window.location.pathname.slice(1))) {
    this.setState({
      showAnnouncement: true
    })
  } else {
    this.setState({
      showAnnouncement: false
    })
  }
}

export function showAnnouncement() {
  this.setState({showAnnouncement: true})
}

export function hideAnnouncement() {
  this.setState({showAnnouncement: false})
}
