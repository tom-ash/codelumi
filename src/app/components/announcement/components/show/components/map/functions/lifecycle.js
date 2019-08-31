import { addMarker, removeMarker } from '../../../../../functions/marker-handlers'

export function componentDidMount() {
  this.googleMapHandler(() => this.props.changeControl({ loaded: true }))
}

export function componentDidUpdate(prevProps) {
  const { loaded, latitude: lat, longitude: lng} = this.props
  this.googleMapHandler(() => this.props.changeControl({ loaded: true }))
  if (loaded && !prevProps.loaded && lat && lng) {
    window.marker = addMarker(window.googleMap, lat, lng)
    window.googleMap.setOptions({ center: { lat, lng }, zoom: 13.6 })
  }
}

export function componentWillUnmount() {
  this.props.changeControl({ loaded: false } )
  removeMarker(window.marker)
}
