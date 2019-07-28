import { addMarker, removeMarker } from '../../../../../functions/marker-handlers'

export function componentDidMount() {
  this.googleMapHandler(() => this.props.changeControl({ loaded: true }))
}

export function componentDidUpdate(prevProps) {
  this.googleMapHandler(() => this.props.changeControl({ loaded: true }))
  if (this.props.loaded && !prevProps.loaded && this.props.latitude && this.props.longitude) {
    window.marker = addMarker(window.googleMap, this.props.latitude, this.props.longitude)
  }
}

export function componentWillUnmount() {
  this.props.changeControl({ loaded: false } )
  removeMarker(window.marker)
}
