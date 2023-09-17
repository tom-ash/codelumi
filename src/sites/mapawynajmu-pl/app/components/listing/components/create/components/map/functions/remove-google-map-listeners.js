export function removeGoogleMapListeners() {
  if (typeof window === 'undefined') return

  if (!window.googleMap) return
  google.maps.event.clearListeners(window.googleMap, 'click')
  google.maps.event.clearListeners(window.googleMap, 'rightclick')
}
