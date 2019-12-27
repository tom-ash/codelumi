export const mapStateToProps = (store) => {
  return {
    language: store.app.language,
    scripts: store.app.scripts,
    mapLoaded: store.announcement.show.control.mapLoaded,
    markerLoaded: store.announcement.show.control.markerLoaded,
    latitude: store.announcement.show.data.mapLatitude,
    longitude: store.announcement.show.data.mapLongitude,
    mapLoaded: store.announcement.show.control.mapLoaded
  }
}

export const mapDispatchToProps = (dispatch) => {
  return {
    changeControl: value => dispatch({ type: 'announcement/show/control', value: value }),
    resetControl: value => dispatch({ type: 'announcement/show/control/reset', value: value }),
    changeData: value => dispatch({ type: 'announcement/show/data', value: value }),
  }
}
    