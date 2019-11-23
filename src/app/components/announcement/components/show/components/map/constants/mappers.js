export const mapStateToProps = (store) => {
  return {
    language: store.app.language,
    scripts: store.app.scripts,
    mapLoaded: store.announcement.show.control.mapLoaded,
    latitude: store.announcement.show.data.mapLatitude,
    longitude: store.announcement.show.data.mapLongitude,
    mapLoaded: store.announcement.show.control.mapLoaded
  }
}

export const mapDispatchToProps = (dispatch) => {
  return {
    changeControl: (value) => dispatch({ type: 'announcement/show/control', value: value }),
    // TODO ADD RESET
    changeData: (value) => dispatch({ type: 'announcement/show/data', value: value }),
  }
}
    