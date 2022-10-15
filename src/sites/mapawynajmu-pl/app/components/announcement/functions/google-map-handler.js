export function shouldSetUpPins() {
  const {
    loadPins,
    announcements,
    svgs
  } = this.props

  if (loadPins) return false
  if (!window.googleMap) return false
  if (!announcements) return false
  if (Object.keys(svgs).length === 0) return
  
  return true
}

export function shouldSetUpMarker() {
  const {
    loadMarker,
    latitude: lat,
    longitude: lng
  } = this.props

  if (loadMarker) return false
  if (!window.googleMap) return false
  if (lat && lng) return true
  
  return false
}

export function loadGoogleMarker(position) {
  window.marker = new google.maps.Marker({ position,  map: window.googleMap })
}
