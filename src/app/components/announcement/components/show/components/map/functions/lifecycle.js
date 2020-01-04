export function componentDidMount() {
  if (!this.props.mapLoaded) {
    this.googleMapHandler(() => this.props.changeControl({ mapLoaded: true }))
  }
}

export function componentDidUpdate() {
  const { changeControl, mapLoaded, mapLoading, markerLoaded, latitude: lat, longitude: lng} = this.props

  if (!mapLoaded && !mapLoading) {
    this.props.changeControl({ mapLoading: true })

    this.googleMapHandler(() => {
      this.props.changeControl({ mapLoaded: true, mapLoading: false })
      window.googleMap.setOptions({ center: { lat, lng }, zoom: 12.6 })
    })
  }

  if (mapLoaded && lat && lng && !markerLoaded) {
    changeControl({ markerLoaded: true })
    window.marker = new google.maps.Marker({ position: { lat, lng },  map: window.googleMap })
  }
}

export function componentWillUnmount() {
  const { resetControl, resetData } = this.props

  if (window.marker) window.marker.setMap(null)
  resetData()
  resetControl()
}
