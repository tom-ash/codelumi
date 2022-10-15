import { addGoogleMapListeners } from './add-google-map-listeners'
import { removeGoogleMapListeners } from './remove-google-map-listeners'

const options = {
  center: {
    lat: 52,
    lng: 19
  },
  zoom: 5.8
}

export function componentDidMount() {
  // this.initializeMap()
}

export function componentDidUpdate(prevProps) {
  // this.initializeMap()

  if (this.props.isMapInitialized && !prevProps.isMapInitialized) addGoogleMapListeners.call(this)
  if (this.props.latitude != prevProps.latitude && this.props.longitude != prevProps.longitude) {
    placeMarker.call(this)
  }
}

export function componentWillUnmount() {
  if (typeof window === 'undefined') return

  this.props.changeControl({ isMapInitialized: false })
  removeGoogleMapListeners.call(this)
  if (window.marker) window.marker.setMap(null)
}

function placeMarker() {
  if (typeof window === 'undefined') return
  
  const map = window.googleMap
  if (!map) return

  if (window.marker) window.marker.setMap(null)
  if (!this.props.latitude || !this.props.longitude) return
  
  window.marker = new google.maps.Marker({
    position: { lat: this.props.latitude, lng: this.props.longitude },  map: map
  })
}
