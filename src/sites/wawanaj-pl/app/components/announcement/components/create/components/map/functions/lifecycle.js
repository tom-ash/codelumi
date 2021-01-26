import { addGoogleMapListeners } from './add-google-map-listeners'
import { removeGoogleMapListeners } from './remove-google-map-listeners'

const options = {
  center: {
    lat: 52.227,
    lng: 21.015,
  }
}

export function componentDidMount() {
  this.googleMapHandler(
    () => this.props.changeControl({ mapLoaded: true }),
    options
  )
}

export function componentDidUpdate(prevProps) {
  this.googleMapHandler(
    () => this.props.changeControl({ mapLoaded: true }),
    options
  )
  if (this.props.mapLoaded && !prevProps.mapLoaded) addGoogleMapListeners.call(this)
  if (this.props.latitude != prevProps.latitude && this.props.longitude != prevProps.longitude) {
    placeMarker.call(this)
  }
}

export function componentWillUnmount() {
  if (typeof window === 'undefined') return

  this.props.changeControl({ mapLoaded: false })
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
