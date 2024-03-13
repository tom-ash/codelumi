import getLocality from './get-locality'
import getSublocality from './get-sublocality'

type GeocodeBasis = { placeId: string } | { location: { lat: string, lng: string } }

interface AddPinProps {
  geocodeBasis: GeocodeBasis;
  description?: string;
  setData(params: object): void;
  setInputs(params: object): void;
  setErrors(params: object): void;
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
  const locality = getLocality(addressComponents)
  const sublocality = getSublocality(addressComponents)

  if ('placeId' in geocodeBasis) {
    map.setOptions(options)
  }

  setData({ items: [] })
  setInputs({ location: description || primaryResult.formatted_address, latitude: position.lat(), longitude: position.lng(), locality, sublocality })
  setErrors({ isMapMarkerError: false })
}
