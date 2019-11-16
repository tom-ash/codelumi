export const mapStateToProps = (store) => {
  const {
    fetch
  } = store.announcement.index.control
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
    offset
  } = store.announcement.index.inputs

  const {
    amount
  } = store.announcement.index.data

  return {
    language: store.app.language,
    path: store.app.path,
    fetch,
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
    offset,
    amount
  }
}
    
export const mapDispatchToProps = (dispatch) => {
  return {
    changeControl: (value) => dispatch({ type: 'announcement/index/control', value: value }),
    changeInputs: (value) => dispatch({ type: 'announcement/index/inputs', value: value }),
    changeData: (value) => dispatch({ type: 'announcement/index/data', value: value }),
    changeAnnouncements: (value) => dispatch({ type: 'announcement/index/data/announcements', value: value }),
  }
}
    