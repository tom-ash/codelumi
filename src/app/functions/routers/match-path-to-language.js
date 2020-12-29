import routes from '../../../shared/constants/routes/routes'
// import { buildLink } from '../../components/announcement/functions/build-link'

export function matchPathToLanguage() {
  if (typeof window === 'undefined') return

  const {
    language
  } = this.props

  const path = window.location.pathname
  const route = routes.find(route => path.match(route.url))
  const {
    track
  } = route

  const lang = language === 'pl' ? 'en' : 'pl'
  const localizedRoute = routes.find(route => route.track === track && route.lang === lang)

  return localizedRoute.url
}
