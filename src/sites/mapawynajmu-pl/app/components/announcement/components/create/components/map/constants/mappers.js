export const mapStateToProps = store => {
  const {
    lang,
    isMobile,
    scripts: {
      googleMaps: googleMapsScriptLoaded,
    }
  } = store.app

  const {
    shouldInitializeMap,
    isMapInitialized,
  } = store.announcement.create.control

  const {
    latitude,
    longitude,
  } = store.announcement.create.inputs

  const {
    map: error
  } = store.announcement.create.errors

  return {
    shouldInitializeMap,
    isMapInitialized,
    googleMapsScriptLoaded,
    latitude,
    longitude,
    error,
    isMobile,
    lang,
  }
}
    
export const mapDispatchToProps = dispatch => {
  return {
    changeControl: value => dispatch({ type: 'announcement/create/control', value }),
    changeInputs: value => dispatch({ type: 'announcement/create/inputs', value }),
    changeErrors: value => dispatch({ type: 'announcement/create/errors', value })
  }
}

// isMapInitialized,
// shouldInitializeMap,
// googleMapsScriptLoaded,
// changeControl
