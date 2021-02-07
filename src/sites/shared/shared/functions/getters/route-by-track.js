function getRouteByTrack({ track, routes }) {
  return routes.find(route => route.track == track)
}

export default getRouteByTrack
