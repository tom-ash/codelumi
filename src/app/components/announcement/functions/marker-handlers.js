export function addMarker(map, latitude, longitude) {
  return new google.maps.Marker({ position: { lat: latitude, lng: longitude }, map: map })
}

export function removeMarker(marker) {
  if (!marker) return
  window.marker.setMap(null)
}
