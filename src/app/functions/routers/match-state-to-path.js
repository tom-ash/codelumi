import { routes, emptyRoutes } from '../../../shared/routes/routes'

export function matchStateToPath({ popState }) {
  const { changeApp } = this.props
  
  if (typeof window === 'undefined') return

  let path = window.location.pathname
  const newRoutes = {}

  for (let [key, matcher] of Object.entries(routes)) {
    if (path.match(matcher.pl.regEx) || path.match(matcher.en.regEx)) {
      newRoutes[key] = true
      if (key === 'showAnnouncementShow') newRoutes.announcementId = path.slice(1)
      if (matcher.needsBackground) newRoutes.showAnnouncementIndexMap = true
    }
  }

  changeApp({ ...emptyRoutes, ...newRoutes })
}