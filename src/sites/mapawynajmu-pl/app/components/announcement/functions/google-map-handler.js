

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
