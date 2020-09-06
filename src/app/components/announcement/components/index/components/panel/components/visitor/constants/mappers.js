export const mapStateToProps = (store) => {
  const { language, isMobile, device, path, showAnnouncementIndexCatalogue } = store.app
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
    showAnnouncementIndexCatalogue,
    language,
    isMobile,
    device,
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
    changeApp: value => dispatch({ type: 'app', value: value}),
    changeControl: (value) => dispatch({ type: 'announcement/index/control', value }),
    changeInputs: (value) => dispatch({ type: 'announcement/index/inputs', value })
  }
}
