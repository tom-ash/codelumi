import { getAddressComponent } from './get-address-component'

type GeocodeBasis = { placeId: string } | { location: { lat: string; lng: string } }

interface AddPinProps {
  geocodeBasis: GeocodeBasis
  description?: string
  setData(params: object): void
  setInputs(params: object): void
  setErrors(params: object): void
}

export const addPin = async (props: AddPinProps) => {
  const { geocodeBasis, description, setData, setInputs, setErrors } = props
  const geocoder = new google.maps.Geocoder()

  // @ts-ignore
  const result = await geocoder.geocode(geocodeBasis)

  const map = window.googleMap
  // @ts-ignore
  const primaryResult = result.results[0]
  const position = primaryResult.geometry.location
  const addressComponents = primaryResult.address_components
  const options = { center: position, zoom: 11 }

  const placeId = primaryResult.place_id
  const country = getAddressComponent(addressComponents, 'country')
  const locality = getAddressComponent(addressComponents, 'locality')
  const sublocality = getAddressComponent(addressComponents, 'sublocality')

  if ('placeId' in geocodeBasis) {
    map.setOptions(options)
  }

  const lat = position.lat()
  const lng = position.lng()

  setData({ items: [] })
  setInputs({
    placeId,
    placeAutocomplete: description || primaryResult.formatted_address,
    lat,
    lng,
    country,
    locality,
    sublocality,
    // TODO: REMOVE BELOW (AFTER ADJUSTING)!!!
    location: description || primaryResult.formatted_address, // TODO: REMOVE!
    latitude: lat, // TODO: REMOVE!
    longitude: lng, // TODO: REMOVE!
  })
  setErrors({ isLocationError: false })
}
