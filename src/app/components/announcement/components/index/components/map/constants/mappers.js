export const mapStateToProps = (store) => {
  const {
    language,
    isMobile,
    scripts,
    showAnnouncementIndexCatalogue,
    device,
    scalableVectorGraphics
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
    tile,
    scalableVectorGraphics
  }
}
    
export const mapDispatchToProps = (dispatch) => {
  return {
    changeControl: (value) => dispatch({ type: 'announcement/index/control', value }),
    changeInputs: (value) => dispatch({ type: 'announcement/index/inputs', value }),
    changeData: (value) => dispatch({ type: 'announcement/index/data', value }),
    changeTile: (value) => dispatch({ type: 'announcement/index/data/map/tile', value }),
    resetControl: (value) => dispatch({ type: 'announcement/index/control/reset', value }),
    resetInputs: (value) => dispatch({ type: 'announcement/index/inputs/reset', value }),
    resetData: (value) => dispatch({ type: 'announcement/index/data/reset', value }),
    changeAnnouncement: (value) => dispatch({ type: 'announcement/index/data/announcement', value }),
  }
}
