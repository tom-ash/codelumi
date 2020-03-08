import { allowedOrigins } from '../../constants/allowed-origins'
import { routes } from '../../../shared/routes/routes'
import { provideTitle } from '../../../shared/functions/providers/provide-title'

export function matchPathToState(prevProps) {
  if (typeof window === 'undefined' ||
      allowedOrigins.indexOf(window.origin) === -1) return

  const routesList = Object.keys(routes)
  let shouldUpdatePath = false
  let updatedRoute

  routesList.map(routeKey => {
    if (!prevProps[routeKey] && this.props[routeKey]) {
      shouldUpdatePath = true
      updatedRoute = routeKey
    }

    if (prevProps[routeKey] && !this.props[routeKey]) {
      routesList.map(routeKey => {
        if (this.props[routeKey]) {
          shouldUpdatePath = true
          updatedRoute = routeKey
        }
      })
    }
  })

  if (shouldUpdatePath ||
      prevProps.language !== this.props.language) {
    let fullPathname = ''
    
    if (this.props['showAnnouncementIndexList']) {
      updatedRoute = 'showAnnouncementIndexList'
    } else {
      updatedRoute = updatedRoute || routesList.find(routeKey => this.props[routeKey])
    }

    if (updatedRoute === 'showAnnouncementShow') {
      const { announcementId } = this.props

      fullPathname = `/${announcementId}`

      const {
        category,
        district,
        area,
        language
      } = this.props

      if (category !== null) {
        const title = provideTitle({ category, district, area, language })
        document.title = title
        document.querySelector('meta[name="description"]').content = title
      }
      document.querySelector('link[rel="canonical"]').href = `${CLIENT_URL}${fullPathname}`
    } else if (updatedRoute === 'showAnnouncementEdit') {
      const { announcementId } = this.props

      fullPathname = `${this.languageObjectHandler(routes[updatedRoute]).url}/${announcementId}`

      document.title = this.languageObjectHandler(routes[updatedRoute]).title
      document.querySelector('meta[name="description"]').content = this.languageObjectHandler(routes[updatedRoute]).description
      document.querySelector('link[rel="canonical"]').href = `${CLIENT_URL}${fullPathname}`
    } else {
      const route = this.languageObjectHandler(routes[updatedRoute]).url

      fullPathname = `/${route}`
      fullPathname = fullPathname.replace(/\/{2,}/, '/')
      fullPathname = fullPathname.replace(/\/$/, '')

      document.title = this.languageObjectHandler(routes[updatedRoute]).title
      document.querySelector('meta[name="description"]').content = this.languageObjectHandler(routes[updatedRoute]).description
      document.querySelector('link[rel="canonical"]').href = `${CLIENT_URL}${fullPathname}`
    }
    
    if (window.location.pathname !== fullPathname) {
      if (this.props.showAnnouncementIndexMap) fullPathname = fullPathname + window.location.search

      if (fullPathname === '') fullPathname = '/'

      window.history.pushState({ path: fullPathname }, '', fullPathname)
    }
  }
}
