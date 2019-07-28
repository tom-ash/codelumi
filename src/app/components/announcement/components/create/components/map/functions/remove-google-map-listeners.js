export function removeGoogleMapListeners() {
  if (!window.googleMap) return
  google.maps.event.clearListeners(window.googleMap, 'click')
  google.maps.event.clearListeners(window.googleMap, 'rightclick')
}