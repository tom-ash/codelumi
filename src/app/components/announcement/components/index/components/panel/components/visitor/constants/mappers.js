export const mapStateToProps = (store) => {
  const { language, isMobile, screenSize, path } = store.app
  const control = store.announcement.index.control
  const inputs = store.announcement.index.inputs

  const {
    readParams,
    fetch,
    type
  } = control

  const {
    category,
    district,
    areaMin,
    areaMax,
    rent,
    rentCurrency,
    rentMin,
    rentMax,
    roomsMin,
    roomsMax,
    totalFloorsMin,
    totalFloorsMax,
    floorMin,
    floorMax,
    availabilityDate,
    switches,
    sort
  } = inputs

  return {
    language,
    isMobile,
    screenSize,
    path,
    readParams,
    fetch,
    type,
    category,
    district,
    areaMin,
    areaMax,
    rent,
    rentCurrency,
    rentMin,
    rentMax,
    roomsMin,
    roomsMax,
    totalFloorsMin,
    totalFloorsMax,
    floorMin,
    floorMax,
    availabilityDate,
    switches,
    sort
  }
}
    
export const mapDispatchToProps = (dispatch) => {
  return {
    changeControl: (value) => dispatch({ type: 'announcement/index/control', value: value }),
    changeInputs: (value) => dispatch({ type: 'announcement/index/inputs', value: value })
  }
}
