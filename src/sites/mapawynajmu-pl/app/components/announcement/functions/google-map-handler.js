import { styles } from '../constants/google-map-styles'

export function setUpGoogleMaps(options) {
  if (window.googleMap) return replaceGoogleMap.call(this, undefined, options)

  const { changeControl } = this.props

  window.googleMap = new google.maps.Map(document.getElementById('google-map'), setOptions.call(this, options))

  changeControl({ mapLoaded: true })
}

export function shouldSetUpGoogleMaps() {
  const { loadMap } = this.props

  if (loadMap) return false
  if (typeof window === 'undefined') return false

  const { googleMaps: googleMapScript } = this.props.scripts

  if (!googleMapScript) return false
  if (!document.getElementById('google-map')) return false

  return true
}

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








// !!! LEGACY !!! START

export function googleMapHandler(callback, options) {
  if (typeof window === 'undefined') return

  if (this.props.mapLoaded) return
  if (this.props.scripts.googleMaps && window.googleMap) return replaceGoogleMap.call(this, callback, options)
  if (!this.props.scripts.googleMaps || window.googleMap) return
  const div = document.getElementById('google-map')
  if (!div) return
  const initializeMap = () => window.googleMap = new google.maps.Map(div, setOptions.call(this, options))
  initializeMap()

  window.sessionToken = new google.maps.places.AutocompleteSessionToken()

  if (callback) callback()
}

// !!! LEGACY !!! END

export function replaceGoogleMap(callback, options) {
  if (typeof window === 'undefined') return
  
  const googleMapContainer = document.getElementById('google-map-container')
  if (!googleMapContainer) return
  const map = window.googleMap
  googleMapContainer.replaceChild(map.getDiv(), document.getElementById('google-map'))
  map.setOptions(setOptions.call(this, options))
  if (callback) callback()
}

function setOptions(options) {
  options = options || {}

  const {
    isMobile
  } = this.props

  return {
    center: {
      lat: 52,
      lng: 19
    },
    zoom: 6.4,
    fullscreenControl: false,
    clickableIcons: false,
    zoomControl: false,
    ...!isMobile && { gestureHandling: 'greedy' },
    styles,
    mapTypeControl: false,
    streetViewControl: false,
    ...options
  }
}
