import { instantScroll } from './scrollers/instant-scroll'
import { routes } from '../constants/routes'
import { routeMatchers } from '../constants/route-matchers'

export function checkRoute() {
  const { changeApp } = this.props
  const path = window.location.pathname
  const newRoutes = { showAnnouncementIndexVisitor: true }

  for (let [key, matcher] of Object.entries(routeMatchers)) {
    if (path.match(new RegExp(`(${matcher.route.polish}|${matcher.route.english})`))) {
      newRoutes[key] = true
      if (matcher.main) newRoutes.showAnnouncementIndexVisitor = false
      if (matcher.announcementId) {
        let announcementId = path.match(/\d+/)
        if (announcementId) {
          newRoutes.announcementId = announcementId[0]
        }
      }
    }
  }
  changeApp(newRoutes)
}

export function changeRoute(newRoutes) {
  const { changeApp } = this.props

  changeApp({ ...routes, ...newRoutes })
  instantScroll()
}

export function handlePathname(prevProps) {
  let shouldUpdatePath = false

  for (let [key, matcher] of Object.entries(routeMatchers)) {
    if (prevProps[key] !== this.props[key]) shouldUpdatePath = true
  }

  if (shouldUpdatePath || prevProps.language !== this.props.language) {
    let search = window.location.search
    let fullPathname = ''

    for (let [key, matcher] of Object.entries(routeMatchers)) {
      if (this.props[key]) {
        const route = this.languageObjectHandler(routeMatchers[key].route)
        fullPathname = `${fullPathname}/${route}`

        if (matcher.announcementId) {
          const { announcementId } = this.props

          fullPathname = `${key === 'showAnnouncementShow' ? '' : fullPathname}/${announcementId}`
        }
      }
    }

    fullPathname = fullPathname.replace(/\/{2,}/, '/')
    fullPathname = fullPathname.replace(/\/$/, '')
    if (fullPathname === '') fullPathname = '/'
    if (this.props.showAnnouncementIndexVisitor) fullPathname = fullPathname + search
    window.history.pushState({ path: fullPathname }, '', fullPathname)
  }
}

export function popStateRoute() {
  if (window.location.pathname === '/') {
    this.changeRoute(null, '/')
  }
}
