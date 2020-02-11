import { instantScroll } from './scrollers/instant-scroll'
import { routes } from '../constants/routes'
import { routeMatchers } from '../constants/route-matchers'
import { allowedOrigins } from '../constants/allowed-origins'

export function checkRoute() {
  if (typeof window === 'undefined') return

  const { changeApp } = this.props
  const path = window.location.pathname
  const newRoutes = { showAnnouncementIndexVisitorMap: true }

  for (let [key, matcher] of Object.entries(routeMatchers)) {
    if (path.match(new RegExp(`(${matcher.route.pl}|${matcher.route.en})`))) {
      newRoutes[key] = true
      if (matcher.main) newRoutes.showAnnouncementIndexVisitorMap = false
      if (matcher.announcementId) {
        let announcementId = path.match(/\d+/)
        if (announcementId) {
          newRoutes.announcementId = announcementId[0]
        }
      }
    }
  }

  changeApp({ ...routes, ...newRoutes })
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

    if (typeof window === 'undefined') return
    if (allowedOrigins.indexOf(window.origin) === -1) return

    fullPathname = fullPathname.replace(/\/{2,}/, '/')
    fullPathname = fullPathname.replace(/\/$/, '')
    if (fullPathname === '') fullPathname = '/'
    
    if (window.location.pathname !== fullPathname) {
      if (this.props.showAnnouncementIndexVisitorMap) fullPathname = fullPathname + window.location.search

      window.history.pushState({ path: fullPathname }, '', fullPathname)
    }
  }
}
