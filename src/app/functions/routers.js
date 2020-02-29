import { instantScroll } from './scrollers/instant-scroll'
import { routes } from '../constants/routes'
import { routeMatchers } from '../constants/route-matchers'
import { allowedOrigins } from '../constants/allowed-origins'

export function checkRoute({ popState }) {
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

export function changeRoute(newRoutes) {
  const { changeApp } = this.props

  changeApp({ ...routes, ...newRoutes })
  instantScroll()
}

export function handlePathname(prevProps) {
  if (typeof window === 'undefined') return
  if (allowedOrigins.indexOf(window.origin) === -1) return

  let shouldUpdatePath = false
  let updatedRoute

  for (let [key] of Object.entries(routeMatchers)) {
    if (!prevProps[key] && this.props[key]) {
      shouldUpdatePath = true
      updatedRoute = key
    }

    if (prevProps[key] && !this.props[key]) {
      for (let [key] of Object.entries(routeMatchers)) {
        if (this.props[key]) {
          shouldUpdatePath = true
          updatedRoute = key
        }
      }
    }
  }

  if (shouldUpdatePath || prevProps.language !== this.props.language) {
    let fullPathname = ''

    if (!updatedRoute) {
      let path = window.location.pathname
      if (path.indexOf('?') !== -1) path = path.substring(0, path.indexOf('?'))
      if (path.slice(-1) === '/') path = path.slice(0, -1)

      Object.keys(routeMatchers).some(routeKey => {
        if (routeMatchers[routeKey].route.pl === path || routeMatchers[routeKey].route.en === path) {
          updatedRoute = routeKey
          return true
        }
      })
    }

    if (updatedRoute === 'showAnnouncementShow') {
      const { announcementId } = this.props

      fullPathname = `/${announcementId}`
    } else {
      const route = this.languageObjectHandler(routeMatchers[updatedRoute].route)

      fullPathname = `/${route}`
      fullPathname = fullPathname.replace(/\/{2,}/, '/')
      fullPathname = fullPathname.replace(/\/$/, '')
    }
    
    if (window.location.pathname !== fullPathname) {
      if (this.props.showAnnouncementIndexMap) fullPathname = fullPathname + window.location.search

      if (fullPathname === '') fullPathname = '/'

      window.history.pushState({ path: fullPathname }, '', fullPathname)
    }
  }
}
