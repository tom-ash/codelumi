import { PAGE_SHOW_TRACK } from '../../../constants/tracks/tracks.js'

function getRouteByUrl({ url, routes }) {
  const route = routes.find(route => {
    const { url: routeUrl } = route

    if (typeof routeUrl === 'string') {
      return url === routeUrl
    }

    return url.match(routeUrl)
  })

  return route || { track: PAGE_SHOW_TRACK }
}

export default getRouteByUrl
