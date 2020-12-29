import routes from '../../../shared/constants/routes/routes'
// import { buildLink } from '../../components/announcement/functions/build-link'

export function matchPathToLanguage() {
  const {
    render,
    language
  } = this.props

  const lang = language === 'pl' ? 'en' : 'pl'
  const route = routes.find(route => render[route.track] && route.lang === lang)
  if (!route) return

  return route.url
}
