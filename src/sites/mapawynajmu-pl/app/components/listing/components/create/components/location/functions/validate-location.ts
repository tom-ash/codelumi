import { LOCATION_ID } from '../location'

interface ValidateLocation {
  (params: { lat: number | null; lng: number | null; setErrors(params: object): void }): 'location' | null
}

export const validateLocation: ValidateLocation = params => {
  const { lat, lng, setErrors } = params

  if (!(lat && lng)) {
    setErrors({ isLocationError: true })

    return LOCATION_ID
  }

  return null
}
