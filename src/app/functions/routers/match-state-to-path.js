import { routes } from '../../constants/routes'
import { routeMatchers } from '../../constants/route-matchers'

export function matchStateToPath({ popState }) {
  if (typeof window === 'undefined') return
  for (let [key] of Object.entries(routes)) if (this.props[key] && !popState) return

  const { changeApp } = this.props
  let path = window.location.pathname
  if (path.indexOf('?') !== -1) path = path.substring(0, path.indexOf('?'))
  if (path.slice(-1) === '/') path = path.slice(0, -1)
  const newRoutes = {}

  if (path === '') return changeApp({ ...routes, ...{ showAnnouncementIndexMap: true } })

  if (path.match(/\d+/)) {
    newRoutes.showAnnouncementShow = true
    newRoutes.announcementId = path.slice(1)
  } else {
    for (let [key, matcher] of Object.entries(routeMatchers)) {
      if (path === matcher.route.pl || path === matcher.route.en) {
        newRoutes[key] = true

        if (!matcher.main) newRoutes.showAnnouncementIndexMap = true
      }
    }
  }

  changeApp({ ...routes, ...newRoutes })
}