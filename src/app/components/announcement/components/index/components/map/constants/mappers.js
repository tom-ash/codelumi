export const mapStateToProps = (store) => {
  return {
    language: store.app.language,
    isMobile: store.app.isMobile,
    scripts: store.app.scripts,
    connecting: store.announcement.index.control.map.connecting,
    fetch: store.announcement.index.control.map.fetch,
    draw: store.announcement.index.control.map.draw,
    

    category: store.announcement.index.inputs.map.category,
    district: store.announcement.index.inputs.map.district,
    availabilityDate: store.announcement.index.inputs.map.availabilityDate,
    rentCurrency: store.announcement.index.inputs.map.rentCurrency,
    rentMin: store.announcement.index.inputs.map.rentMin,
    rentMax: store.announcement.index.inputs.map.rentMax,
    areaMin: store.announcement.index.inputs.map.areaMin,
    areaMax: store.announcement.index.inputs.map.areaMax,
    roomsMin: store.announcement.index.inputs.map.roomsMin,
    roomsMax: store.announcement.index.inputs.map.roomsMax,
    floorMin: store.announcement.index.inputs.map.floorMin,
    floorMax: store.announcement.index.inputs.map.floorMax,
    totalFloorsMin: store.announcement.index.inputs.map.totalFloorsMin,
    totalFloorsMax: store.announcement.index.inputs.map.totalFloorsMax,
    amount: store.announcement.index.data.map.amount,
    announcements: store.announcement.index.data.map.announcements,
    pins: store.announcement.index.data.map.pins,
    tile: store.announcement.index.data.map.tile,
    loaded: store.announcement.index.control.map.loaded,

    searchInitiated: store.announcement.index.control.full.searchInitiated,

    rentActive: store.announcement.index.control.map.rentActive,
    areaActive: store.announcement.index.control.map.areaActive,
    roomsActive: store.announcement.index.control.map.roomsActive,
    floorActive: store.announcement.index.control.map.floorActive,
    totalFloorsActive: store.announcement.index.control.map.totalFloorsActive,

    availabilityDateFocus: store.announcement.index.control.map.availabilityDateFocus,
    availabilityDateActive: store.announcement.index.control.map.availabilityDateActive,
  }
}
    
export const mapDispatchToProps = (dispatch) => {
  return {
    changeControl: (value) => dispatch({ type: 'announcement/index/control/map', value: value }),
    changeInputs: (value) => dispatch({ type: 'announcement/index/inputs/map', value: value }),
    changeData: (value) => dispatch({ type: 'announcement/index/data/map', value: value }),
    changeAnnouncement: (value) => dispatch({ type: 'announcement/index/data/map/announcement', value: value }),
    resetControl: (value) => dispatch({ type: 'announcement/index/control/map/reset', value: value }),
    resetInputs: (value) => dispatch({ type: 'announcement/index/inputs/map/reset', value: value }),
    resetData: (value) => dispatch({ type: 'announcement/index/data/map/reset', value: value }),
  }
}
