export const mapStateToProps = (store) => {
  const { language, isMobile } = store.app
  const control = store.announcement.index.control.full
  const inputs = store.announcement.index.control.inputs
  const data = store.announcement.index.control.data

  const {
    readParams,
    fetchAmount,
    fetchList,
    showList,
    rentActive,
    areaActive,
    roomsActive,
    floorActive,
    totalFloorsActive
  } = control

  return {
    venue: 'indexFull',
    language,
    isMobile,
    readParams,
    fetchAmount,
    fetchList,
    rentActive,
    areaActive,
    roomsActive,
    floorActive,
    totalFloorsActive,
    showList,
    

    screenSize: store.app.screenSize,
    connecting: store.announcement.index.control.full.connecting,
    read: store.announcement.index.control.full.read,
    fetch: store.announcement.index.control.full.fetch,
    fetchAmount: store.announcement.index.control.full.fetchAmount,
    changed: store.announcement.index.control.full.changed,
    page: store.announcement.index.control.full.page,
    availabilityDateFocus: store.announcement.index.control.full.availabilityDateFocus,
    availabilityDateActive: store.announcement.index.control.full.availabilityDateActive,
    category: store.announcement.index.inputs.full.category,
    district: store.announcement.index.inputs.full.district,

    rent: store.announcement.index.inputs.full.rent,
    rentCurrency: store.announcement.index.inputs.full.rentCurrency,
    rentMin: store.announcement.index.inputs.full.rentMin,
    rentMax: store.announcement.index.inputs.full.rentMax,
    availabilityDate: store.announcement.index.inputs.full.availabilityDate,
    floorMin: store.announcement.index.inputs.full.floorMin,
    floorMax: store.announcement.index.inputs.full.floorMax,
    areaMin: store.announcement.index.inputs.full.areaMin,
    areaMax: store.announcement.index.inputs.full.areaMax,
    roomsMin: store.announcement.index.inputs.full.roomsMin,
    roomsMax: store.announcement.index.inputs.full.roomsMax,
    totalFloorsMin: store.announcement.index.inputs.full.totalFloorsMin,
    totalFloorsMax: store.announcement.index.inputs.full.totalFloorsMax,


    panelAmount: store.announcement.index.data.full.panelAmount,
    listAmount: store.announcement.index.data.full.listAmount,


    announcements: store.announcement.index.data.full.announcements
  }
}
    
export const mapDispatchToProps = (dispatch) => {
  return {
    changeControl: (value) => dispatch({ type: 'announcement/index/control/full', value: value }),
    changeInputs: (value) => dispatch({ type: 'announcement/index/inputs/full', value: value }),
    changeData: (value) => dispatch({ type: 'announcement/index/data/full', value: value }),
    changeAnnouncement: (value) => dispatch({ type: 'announcement/index/data/full/announcement', value: value }),
  }
}
