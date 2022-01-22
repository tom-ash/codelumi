function getRoute(addressComponents) {
  const localityAddressComponent = addressComponents.find(addressComponent => addressComponent.types.indexOf('route') !== -1)

  if (!localityAddressComponent) return

  return localityAddressComponent.long_name
}

export default getRoute
