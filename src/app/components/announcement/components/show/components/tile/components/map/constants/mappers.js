export const mapStateToProps = (store) => {
  const {
    isMobile
  } = store.app

  const { 
    loadMap,
    mapLoaded,
    loadMarker
  } = store.announcement.show.control

  return {
    isMobile,
    loadMap,
    mapLoaded,
    loadMarker,
    language: store.app.language,
    scripts: store.app.scripts,
    
    markerLoaded: store.announcement.show.control.markerLoaded,
    latitude: store.announcement.show.data.mapLatitude,
    longitude: store.announcement.show.data.mapLongitude,
    
    mapLoading: store.announcement.show.control.mapLoading,
  }
}

export const mapDispatchToProps = (dispatch) => {
  return {
    changeControl: value => dispatch({ type: 'announcement/show/control', value: value }),
    resetControl: value => dispatch({ type: 'announcement/show/control/reset', value: value }),
    changeData: value => dispatch({ type: 'announcement/show/data', value: value }),
    resetData: value => dispatch({ type: 'announcement/show/data/reset', value: value }),
  }
}
    