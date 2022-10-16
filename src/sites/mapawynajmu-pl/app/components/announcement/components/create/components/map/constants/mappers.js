export const mapStateToProps = store => {
  const {
    lang,
    isMobile,
    scripts: {
      googleMaps: googleMapsScriptLoaded,
    },
  } = store.app

  const {
    svgs,
  } = store.assets

  const {
    shouldInitializeMap,
    isMapInitialized,
  } = store.announcement.create.control

  const {
    latitude,
    longitude,
    category,
  } = store.announcement.create.inputs

  const {
    pin,
  } = store.announcement.create.data

  const {
    map: error
  } = store.announcement.create.errors

  return {
    shouldInitializeMap,
    isMapInitialized,
    googleMapsScriptLoaded,
    latitude,
    longitude,
    pin,
    error,
    isMobile,
    lang,
    svgs,
    category,
  }
}
    
export const mapDispatchToProps = dispatch => {
  return {
    changeControl: value => dispatch({ type: 'announcement/create/control', value }),
    changeInputs: value => dispatch({ type: 'announcement/create/inputs', value }),
    changeData: value => dispatch({ type: 'announcement/create/data', value }),
    changeErrors: value => dispatch({ type: 'announcement/create/errors', value })
  }
}

// isMapInitialized,
// shouldInitializeMap,
// googleMapsScriptLoaded,
// changeControl
