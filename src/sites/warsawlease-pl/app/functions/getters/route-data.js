function getRouteData(route) {
  const { url, track, lang } = route

  return fetch(API_URL + `/route_data`, {
    headers: { 'Content-Type': 'application/json', 'Route-Url': url, 'Track': track, 'Lang': lang }
  })
  .then(response => {
    if (response.ok) return response.json()

    throw new Error('Page Not Found')
  })
}

export default getRouteData
