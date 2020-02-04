export function replaceGoogleMap(callback) {
  if (typeof window === 'undefined') return
  
  if (!window.googleMap) return
  const googleMapContainer = document.getElementById('google-map-container')
  const googleMap = document.getElementById('google-map')
  googleMapContainer.replaceChild(window.googleMap.getDiv(), googleMap)
  callback()
}
