export const mapStateToProps = (store) => {
  const { language, isMobile, screenSize } = store.app
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
  } = inputs

  return {
    language,
    isMobile,
    screenSize,
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
    availabilityDate
  }
}
    
export const mapDispatchToProps = (dispatch) => {
  return {
    changeControl: (value) => dispatch({ type: 'announcement/index/control', value: value }),
    changeInputs: (value) => dispatch({ type: 'announcement/index/inputs', value: value })
  }
}
