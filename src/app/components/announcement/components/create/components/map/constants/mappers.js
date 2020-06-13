export const mapStateToProps = (store) => {
  const {
    language,
    isMobile
  } = store.app

  return {
    isMobile,
    language,
    scripts: store.app.scripts,
    latitude: store.announcement.create.inputs.mapLatitude,
    longitude: store.announcement.create.inputs.mapLongitude,
    mapLoaded: store.announcement.create.control.mapLoaded,
    error: store.announcement.create.errors.map
  }
}
    
export const mapDispatchToProps = (dispatch) => {
  return {
    changeControl: value => dispatch({ type: 'announcement/create/control', value: value }),
    changeInputs: value => dispatch({ type: 'announcement/create/inputs', value: value }),
    changeErrors: value => dispatch({ type: 'announcement/create/errors', value: value })
  }
}
