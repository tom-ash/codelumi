import { addMarker, removeMarker } from '../../../../../functions/marker-handlers'

export function componentDidMount() {
  this.googleMapHandler(() => this.props.changeControl({ mapLoaded: true }))
}

export function componentDidUpdate(prevProps) {
  const { mapLoaded, latitude: lat, longitude: lng} = this.props
  this.googleMapHandler(() => this.props.changeControl({ mapLoaded: true }))
  if (mapLoaded && !prevProps.mapLoaded && lat && lng) {
    window.marker = addMarker(window.googleMap, lat, lng)
    window.googleMap.setOptions({ center: { lat, lng }, zoom: 13.6 })
  }
}

export function componentWillUnmount() {
  this.props.changeControl({ mapLoaded: false } )
  removeMarker(window.marker)
}
