export const mapStateToProps = store => {
  const {
    lang,
    isMobile,
    scripts: { googleMaps: googleMapsScriptLoaded },
  } = store.app

  const { svgs } = store.assets
  const { shouldInitializeMap, isMapInitialized } = store.control
  const { latitude, longitude, category } = store.announcement.create.inputs
  const { pin } = store.data
  const { map: error } = store.errors

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
    setControl: value => dispatch({ type: 'control', value }),
    setInputs: value => dispatch({ type: 'announcement/create/inputs', value }),
    setData: value => dispatch({ type: 'data', value }),
    setErrors: value => dispatch({ type: 'errors', value }),
  }
}
