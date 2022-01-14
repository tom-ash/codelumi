function addMarker(props) {
  const { autocomplete, setState, changeInputs, changeErrors } = props
  const placeId = autocomplete.place_id
  const geocoder = new google.maps.Geocoder()

  geocoder.geocode({ placeId }).then(result => {
    if (window.marker) window.marker.setMap(null)

    const map = window.googleMap
    const position = result.results[0].geometry.location
    const options = { center: position, zoom: 17 }

    window.marker = new google.maps.Marker({ position , map })
    map.setOptions(options)
    changeInputs({ latitude: position.lat(), longitude: position.lng() } )
    changeErrors({ map: { pl: '', en: '' }})
  })

  setState({ showAutocompletes: false, autocompleteInput: autocomplete.description })
}

export default addMarker
