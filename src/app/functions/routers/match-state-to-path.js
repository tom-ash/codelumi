import { routes, emptyRoutes } from '../../../shared/routes/routes'

export function matchStateToPath({ popState }) {
  const { changeApp } = this.props
  
  if (typeof window === 'undefined') return

  let path = window.location.pathname
  const newRoutes = {}

  for (let [key, matcher] of Object.entries(routes)) {
    if (path.match(matcher.pl.regEx) || path.match(matcher.en.regEx)) {
      newRoutes[key] = true

      if (key === 'showAnnouncementShow' || key === 'showAnnouncementEdit') {
        newRoutes.announcementId = +path.match(/\d+/)[0]
      }

      if (matcher.needsAnnouncementIndexMap) newRoutes.showAnnouncementIndexMap = true
    }
  }

  changeApp({ ...emptyRoutes, ...newRoutes })
}
