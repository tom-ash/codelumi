export const mapStateToProps = store => {
  const {
    lang,
    isMobile
  } = store.app

  return {
    isMobile,
    lang,
    scripts: store.app.scripts,
    latitude: store.announcement.create.inputs.latitude,
    longitude: store.announcement.create.inputs.longitude,
    isMapInitialized: store.announcement.create.control.isMapInitialized,
    error: store.announcement.create.errors.map
  }
}
    
export const mapDispatchToProps = dispatch => {
  return {
    changeControl: value => dispatch({ type: 'announcement/create/control', value }),
    changeInputs: value => dispatch({ type: 'announcement/create/inputs', value }),
    changeErrors: value => dispatch({ type: 'announcement/create/errors', value })
  }
}
