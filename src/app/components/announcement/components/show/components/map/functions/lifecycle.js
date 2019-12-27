export function componentDidMount() {
  this.googleMapHandler(() => this.props.changeControl({ mapLoaded: true }))
}

export function componentDidUpdate() {
  const { changeControl, mapLoaded, markerLoaded, latitude: lat, longitude: lng} = this.props

  this.googleMapHandler(() => this.props.changeControl({ mapLoaded: true }))

  if (mapLoaded && lat && lng && !markerLoaded) {
    changeControl({ markerLoaded: true })
    window.marker = new google.maps.Marker({
      position: { lat: this.props.latitude, lng: this.props.longitude },  map: window.googleMap
    })
    window.googleMap.setOptions({ center: { lat, lng }, zoom: 13.6 })
  }
}

export function componentWillUnmount() {
  const { resetControl } = this.props

  if (window.marker) window.marker.setMap(null)
  resetControl()
}
