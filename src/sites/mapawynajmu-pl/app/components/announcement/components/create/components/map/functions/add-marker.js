import getLocality from "./get-locality"
import getSublocality from './get-sublocality'

function addMarker(props) {
  const { autocomplete, setState, changeInputs, changeErrors } = props
  const placeId = autocomplete.place_id
  const geocoder = new google.maps.Geocoder()

  geocoder.geocode({ placeId }).then(result => {
    if (window.marker) window.marker.setMap(null)

    const map = window.googleMap
    const primaryResult = result.results[0]
    const position = primaryResult.geometry.location
    const addressComponents = primaryResult.address_components
    const options = { center: position, zoom: 17 }

    const locality = getLocality(addressComponents)
    const sublocality = getSublocality(addressComponents)

    window.marker = new google.maps.Marker({ position , map })
    map.setOptions(options)
    changeInputs({ latitude: position.lat(), longitude: position.lng(), locality, sublocality })
    changeErrors({ map: { pl: '', en: '' }})
  })

  setState({ showAutocompletes: false, autocompleteInput: autocomplete.description })
}

export default addMarker
