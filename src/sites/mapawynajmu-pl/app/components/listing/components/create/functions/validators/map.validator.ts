interface MapValidator {
  (params: { lat: number | null; lng: number | null; setErrors(params: object): void }): boolean
}

export const mapValidator: MapValidator = params => {
  const { lat, lng, setErrors } = params

  if (!(lat && lng)) {
    setErrors({ isMapMarkerError: true })

    return false
  }
  return true
}
