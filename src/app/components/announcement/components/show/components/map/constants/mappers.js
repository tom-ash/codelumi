export const mapStateToProps = (store) => {
  return {
    language: store.app.language,
    scripts: store.app.scripts,
    loaded: store.announcement.show.control.mapLoaded,
    latitude: store.announcement.show.data.mapLatitude,
    longitude: store.announcement.show.data.mapLongitude,
    loaded: store.announcement.show.control.loaded
  }
}

export const mapDispatchToProps = (dispatch) => {
  return {
    changeControl: (value) => dispatch({ type: 'announcement/show/control', value: value }),
    // TODO ADD RESET
    changeData: (value) => dispatch({ type: 'announcement/show/data', value: value }),
  }
}
    