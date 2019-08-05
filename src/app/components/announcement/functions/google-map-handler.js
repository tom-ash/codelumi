export function googleMapHandler(callback, options) {
  if (this.props.loaded) return
  if (this.props.scripts.googleMaps && window.googleMap) return replaceGoogleMap.call(this, callback)
  if (!this.props.scripts.googleMaps || window.googleMap) return
  const div = document.getElementById('google-map')
  if (!div) return
  options = options || {}
  function initializeMap() {
    window.googleMap = new google.maps.Map(div, {
      center: {lat: options.latitude || 52.222, lng: options.longitude || 20.985},
      zoom: options.zoom || 12.9,
      mapTypeControl: false,
      fullscreenControl: false,
      streetViewControl: false,
      clickableIcons: false
    })
  }
  initializeMap()
  if (callback) callback()
}

export function replaceGoogleMap(callback) {
  const googleMapContainer = document.getElementById('google-map-container')
  if (!googleMapContainer) return
  googleMapContainer.replaceChild(window.googleMap.getDiv(), document.getElementById('google-map'))
  if (callback) callback()
}
