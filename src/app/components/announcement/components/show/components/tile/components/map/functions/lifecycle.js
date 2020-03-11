import {
  setUpGoogleMaps,
  loadGoogleMarker
} from '../../../../../../../functions/google-map-handler'

export function componentDidMount() {
  const { changeControl } = this.props

  if (this.shouldSetUpGoogleMaps()) changeControl({ loadMap: true })
}

export function componentDidUpdate(prevProps) {
  const {
    loadMap: prevLoadMap,
    loadMarker: prevLoadMarker
  } = prevProps

  const {
    changeControl,
    loadMap,
    loadMarker,
    latitude: lat,
    longitude: lng
  } = this.props

  if (this.shouldSetUpGoogleMaps()) changeControl({ loadMap: true })
  if (!prevLoadMap && loadMap) setUpGoogleMaps.call(this, { center: { lat, lng }, zoom: 12.6 })

  if (this.shouldSetUpMarker()) changeControl({ loadMarker: true })
  if (!prevLoadMarker && loadMarker) loadGoogleMarker.call(this, { lat, lng })
}

export function componentWillUnmount() {
  const { resetControl, resetData } = this.props

  if (window.marker) window.marker.setMap(null)
  resetData()
  resetControl()
}
