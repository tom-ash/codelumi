export const mapStateToProps = store => {
  const {
    lang
  } = store.app

  const {
    authorized
  } = store.user.authorize.data

  const {
    connecting,
    success,
    publishing
  } = control

  const {
    id,
    category,
    rentCurrency,
    netRentAmount,
    grossRentAmount,
    area,
    rooms,
    floor,
    totalFloors,
    availabilityDateSelect,
    availabilityDate,
    blobs: blobs,
    picUploads: picUploads,
    features,
    furnishings,
    polishDescription,
    englishDescription,
    latitude,
    longitude
  } = inputs

  const {
    netRentAmountPerSqm: calculatedNetRentAmountPerSqm,
    grossRentAmount: calculatedGrossRentAmount,
    grossRentAmountPerSqm: calculatedGrossRentAmountPerSqm
  } = data

  return {
    calculatedNetRentAmountPerSqm,
    calculatedGrossRentAmount,
    calculatedGrossRentAmountPerSqm,
    lang,
    authorized,
    connecting,    
    success,
    publishing,
    id,
    category,
    rentCurrency,
    netRentAmount,
    grossRentAmount,
    area,
    rooms,
    floor,
    totalFloors,
    availabilityDateSelect,
    availabilityDate,
    blobs,
    picUploads,
    features,
    furnishings,
    polishDescription,
    englishDescription,
    latitude,
    longitude,
    errors
  }
}
    
export const mapDispatchToProps = dispatch => {
  return {
    changeApp: value => dispatch({ type: 'app', value }),
    changeControl: value => dispatch({ type: 'announcement/create/control', value }),
    changeInputs: value => dispatch({ type: 'announcement/create/inputs', value }),
    changeErrors: value => dispatch({ type: 'announcement/create/errors', value })
  }
}
