import routes from '../../../shared/constants/routes/routes'
import { getPath } from './get-path'

export function matchPathToLanguage() {
  const {
    render,
    language
  } = this.props
  const lang = language === 'pl' ? 'en' : 'pl'
  const route = routes.find(route => render[route.track] && route.lang === lang)

  return getPath.apply(this, [route])
}
