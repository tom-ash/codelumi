import routes from '../../constants/routes/routes'

export function getRoute(url) {
  return routes.find(route => {
    const { url: routeUrl } = route

    if (typeof routeUrl === 'string') {
      return url === routeUrl
    }

    return url.match(routeUrl)
  })
}
