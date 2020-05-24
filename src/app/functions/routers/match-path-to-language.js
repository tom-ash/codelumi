import { routes } from '../../../shared/routes/routes'
import { buildLink } from '../../components/announcement/functions/build-link'

export function matchPathToLanguage() {
  let overshadowingRoute
  let overshadowedRoute

  const language = this.props.language === 'pl' ? 'en' : 'pl'

  Object.keys(routes).map(routeKey => {
    if (this.props[routeKey]) {
      if (routes[routeKey].overshadow) overshadowingRoute = routeKey
      else overshadowedRoute = routeKey
    }
  })

  if ([overshadowingRoute, overshadowedRoute].indexOf('showAnnouncementShow') !== -1) {

    const {
      announcementId,
      category,
      district,
      area
    } = this.props

    if (category === null && district === null) return `/${announcementId}`

    return buildLink({ id: announcementId, category, district, area, language })
  }

  if ([overshadowingRoute, overshadowedRoute].indexOf('showAnnouncementEdit') !== -1) {
    return `${CLIENT_URL}/${routes.showAnnouncementEdit[language].url}/${this.props.announcementId}`
  }

  if (overshadowingRoute) return routes[overshadowingRoute][language].url
  if (overshadowedRoute) return routes[overshadowedRoute][language].url

  return ''
}
