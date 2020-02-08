export const mapStateToProps = (store) => {
  const {
    language,
    path,
    showAnnouncementIndexVisitorMap: showVisitor,
    showAnnouncementIndexUser: showUser
  } = store.app

  const {
    fetch,
    type
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
    offset,
    switches,
    sort,
    page
  } = store.announcement.index.inputs

  const {
    amount
  } = store.announcement.index.data

  return {
    language,
    path,
    showVisitor,
    showUser,
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
    sort,
    page,
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
    resetControl: (value) => dispatch({ type: 'announcement/index/control/reset', value: value }),
    resetInputs: (value) => dispatch({ type: 'announcement/index/inputs/reset', value: value }),
    resetData: (value) => dispatch({ type: 'announcement/index/data/reset', value: value })
  }
}
    