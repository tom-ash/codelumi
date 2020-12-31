export const mapStateToProps = (store) => {
  const {
    language,
    isMobile,
    scripts,
    device,
    scalableVectorGraphics
  } = store.app

  const {
    connecting,
    mapLoaded,
    type,
    loadMap,
    loadPins,
    miniListFarthestScrollTop,
    miniListFarthestScrollLeft
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
    connecting,
    type,
    mapLoaded,
    announcements,
    pins,
    tileId,
    tile,
    scalableVectorGraphics,
    miniListFarthestScrollTop,
    miniListFarthestScrollLeft
  }
}
    
export const mapDispatchToProps = (dispatch) => {
  return {
    changeControl: value => dispatch({ type: 'announcement/index/control', value }),
    changeInputs: value => dispatch({ type: 'announcement/index/inputs', value }),
    changeData: value => dispatch({ type: 'announcement/index/data', value }),
    changeTile: value => dispatch({ type: 'announcement/index/data/map/tile', value }),
    resetControl: value => dispatch({ type: 'announcement/index/control/reset', value }),
    resetInputs: value => dispatch({ type: 'announcement/index/inputs/reset', value }),
    resetData: value => dispatch({ type: 'announcement/index/data/reset', value }),
    changeAnnouncement: value => dispatch({ type: 'announcement/index/data/announcement', value }),
    changeApp: value => dispatch({ type: 'app', value: value}),
    changeAnnouncementShowData: value => dispatch({ type: 'announcement/show/data', value }),
    changePostRender: value => dispatch({ type: 'page/render', value: value}),
    changePageShowData: value => dispatch({ type: 'page/show/data', value: value})
  }
}
