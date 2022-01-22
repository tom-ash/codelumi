function getSublocality(addressComponents) {
  const localityAddressComponent = addressComponents.find(addressComponent => addressComponent.types.indexOf('sublocality') !== -1)

  if (!localityAddressComponent) return

  return localityAddressComponent.long_name
}

export default getSublocality
