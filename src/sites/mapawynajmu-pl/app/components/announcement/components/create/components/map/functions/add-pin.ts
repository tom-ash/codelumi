import getLocality from './get-locality'
import getSublocality from './get-sublocality'

interface AddPinProps {
  autocomplete: {
    place_id: string
    description: string
  }
  setState(args: object): void
  setInputs(args: object): void
  setErrors(args: object): void
}

function addPin(props: AddPinProps) {
  const { autocomplete, setState, setInputs, setErrors } = props
  const placeId = autocomplete.place_id
  const geocoder = new google.maps.Geocoder()

  geocoder
    // @ts-ignore
    .geocode({ placeId })
    // @ts-ignore
    .then(result => {
      const map = window.googleMap
      const primaryResult = result.results[0]
      const position = primaryResult.geometry.location
      const addressComponents = primaryResult.address_components
      const options = { center: position, zoom: 17 }

      const locality = getLocality(addressComponents)
      const sublocality = getSublocality(addressComponents)

      map.setOptions(options)
      setInputs({ latitude: position.lat(), longitude: position.lng(), locality, sublocality })
      setErrors({ map: { pl: '', en: '' } })
    })

  setState({ showAutocompletes: false, autocompleteInput: autocomplete.description })
}

export default addPin
