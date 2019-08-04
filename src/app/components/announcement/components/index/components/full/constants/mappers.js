export const mapStateToProps = (store) => {
  return {
    language: store.app.language,
    venue: 'indexFull',

    rentActive: store.announcement.index.control.full.rentActive,
    areaActive: store.announcement.index.control.full.areaActive,


    roomsActive: store.announcement.index.control.full.roomsActive,
    floorActive: store.announcement.index.control.full.floorActive,
    totalFloorsActive: store.announcement.index.control.full.totalFloorsActive,
    

    screenSize: store.app.screenSize,
    connecting: store.announcement.index.control.full.connecting,
    read: store.announcement.index.control.full.read,
    fetch: store.announcement.index.control.full.fetch,
    fetchAmount: store.announcement.index.control.full.fetchAmount,
    changed: store.announcement.index.control.full.changed,
    page: store.announcement.index.control.full.page,
    availabilityDateFocus: store.announcement.index.control.full.availabilityDateFocus,
    calendarHover: store.announcement.index.control.full.calendarHover,
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
    amount: store.announcement.index.data.full.amount,
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
