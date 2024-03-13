// @ts-ignore
function getSublocality(addressComponents) {
  const localityAddressComponent = addressComponents.find(
    // @ts-ignore
    addressComponent => addressComponent.types.indexOf('sublocality') !== -1
  )

  if (!localityAddressComponent) return null

  return localityAddressComponent.long_name
}

export default getSublocality
