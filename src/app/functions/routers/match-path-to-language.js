import routes from '../../../shared/constants/routes/routes'

export function matchPathToLanguage() {
  const {
    render,
    language
  } = this.props

  const lang = language === 'pl' ? 'en' : 'pl'
  const route = routes.find(route => render[route.track] && route.lang === lang)

  if (route) {
    return (() => {
      if (route.buildUrl) {
        return route.buildUrl.apply(this, [lang])
      } else {
        return route.url
      }
    })()
  }

  // HANDLE PAGE SHOW FOUND & NOT FOUND
}
