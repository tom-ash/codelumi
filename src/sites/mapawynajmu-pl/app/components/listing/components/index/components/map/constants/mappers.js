export const mapStateToProps = store => {
  const { app, assets, links, control, data, render } = store
  const {
    lang,
    isMobile,
    scripts: { googleMaps: googleMapsScriptLoaded },
    device,
  } = app
  const { svgs } = assets
  const {
    connecting,
    isMapInitialized,
    type,
    loadMap,
    loadPins,
    miniListFarthestScrollTop,
    miniListFarthestScrollLeft,
    fetch,
    hoveredTileId,
    currentTileId,
    mapOptions,
    shouldInitializeMap,
    isPinsDrawn,
  } = control
  const { announcements, pins, tileId, tile, title, currentPartnerName } = data

  return {
    loadMap,
    loadPins,
    device,
    lang,
    isMobile,
    googleMapsScriptLoaded,
    connecting,
    type,
    isMapInitialized,
    announcements,
    pins,
    tileId,
    tile,
    svgs,
    miniListFarthestScrollTop,
    miniListFarthestScrollLeft,
    fetch,
    hoveredTileId,
    currentTileId,
    mapOptions,
    shouldInitializeMap,
    isPinsDrawn,
    title,
    currentPartnerName,
    render,
  }
}

export const mapDispatchToProps = dispatch => {
  return {
    setApp: value => dispatch({ type: 'app', value }),
    setControl: value => dispatch({ type: 'control', value }),
    setInputs: value => dispatch({ type: 'inputs', value }),
    setData: value => dispatch({ type: 'data', value }),
  }
}
