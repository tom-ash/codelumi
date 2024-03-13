// @ts-ignore
function getLocality(addressComponents) {
  const localityAddressComponent = addressComponents.find(
    // @ts-ignore
    addressComponent => addressComponent.types.indexOf('locality') !== -1
  )

  if (!localityAddressComponent) return null

  return localityAddressComponent.long_name
}

export default getLocality
