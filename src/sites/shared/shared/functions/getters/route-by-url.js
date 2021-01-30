function getRouteByUrl({ url, routes }) {
  return routes.find(route => {
    const { url: routeUrl } = route

    if (typeof routeUrl === 'string') {
      return url === routeUrl
    }

    return url.match(routeUrl)
  })
}

export default getRouteByUrl
