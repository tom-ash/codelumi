export const mapStateToProps = (store) => {
  const {
    language,
    isMobile,
    scripts,
    showAnnouncementIndexCatalogue,
    device
  } = store.app
  const {
    connecting,
    mapLoaded,
    type,
    loadMap,
    loadPins
  } = store.announcement.index.control
  const {
    announcements,
    pins,
    tileId,
    tile
  } = store.announcement.index.data

  return {
    loadMap,
    loadPins,
    device,
    language,
    isMobile,
    scripts,
    showAnnouncementIndexCatalogue,
    connecting,
    type,
    mapLoaded,
    announcements,
    pins,
    tileId,
    tile
  }
}
    
export const mapDispatchToProps = (dispatch) => {
  return {
    changeControl: (value) => dispatch({ type: 'announcement/index/control', value: value }),
    changeInputs: (value) => dispatch({ type: 'announcement/index/inputs', value: value }),
    changeData: (value) => dispatch({ type: 'announcement/index/data', value: value }),
    changeTile: (value) => dispatch({ type: 'announcement/index/data/map/tile', value: value }),
    resetControl: (value) => dispatch({ type: 'announcement/index/control/reset', value: value }),
    resetInputs: (value) => dispatch({ type: 'announcement/index/inputs/reset', value: value }),
    resetData: (value) => dispatch({ type: 'announcement/index/data/reset', value: value }),
    changeAnnouncement: (value) => dispatch({ type: 'announcement/index/data/announcement', value: value }),
  }
}
