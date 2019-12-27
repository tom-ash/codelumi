import { addGoogleMapListeners } from './add-google-map-listeners'
import { removeGoogleMapListeners } from './remove-google-map-listeners'

export function componentDidMount() {
  this.googleMapHandler(() => this.props.changeControl({ mapLoaded: true }))
}

export function componentDidUpdate(prevProps) {
  this.googleMapHandler(() => this.props.changeControl({ mapLoaded: true }))
  if (this.props.mapLoaded && !prevProps.mapLoaded) addGoogleMapListeners.call(this)
  if (this.props.latitude != prevProps.latitude && this.props.longitude != prevProps.longitude) {
    placeMarker.call(this)
  }
}

export function componentWillUnmount() {
  this.props.changeControl({ mapLoaded: false })
  removeGoogleMapListeners.call(this)
  if (window.marker) window.marker.setMap(null)
}

function placeMarker() {
  const map = window.googleMap
  if (!map) return

  if (window.marker) window.marker.setMap(null)
  if (!this.props.latitude || !this.props.longitude) return
  
  window.marker = new google.maps.Marker({
    position: { lat: this.props.latitude, lng: this.props.longitude },  map: map
  })
}
