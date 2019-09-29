export function googleMapHandler(callback, options) {
  if (this.props.loaded) return
  if (this.props.scripts.googleMaps && window.googleMap) return replaceGoogleMap.call(this, callback, options)
  if (!this.props.scripts.googleMaps || window.googleMap) return
  const div = document.getElementById('google-map')
  if (!div) return
  const initializeMap = () => window.googleMap = new google.maps.Map(div, setOptions.call(this, options))
  initializeMap()
  if (callback) callback()
}

export function replaceGoogleMap(callback, options) {
  const googleMapContainer = document.getElementById('google-map-container')
  if (!googleMapContainer) return
  const map = window.googleMap
  googleMapContainer.replaceChild(map.getDiv(), document.getElementById('google-map'))
  map.setOptions(setOptions.call(this, options))
  if (callback) callback()
}

function setOptions(options) {
  options = options || {}
  return {
    center: {
      lat: options.latitude || (this.props.isMobile ? 52.24: 52.222),
      lng: options.longitude || (this.props.isMobile ? 21 : 20.985)
    },
    zoom: options.zoom || (this.props.isMobile ? 11.9 : 12.6),
    mapTypeControl: false,
    fullscreenControl: false,
    streetViewControl: false,
    clickableIcons: false
  }
}
