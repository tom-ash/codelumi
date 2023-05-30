export const mapStateToProps = store => {
  const { app, assets, links, control, data } = store
  const {
    lang,
    isMobile,
    scripts: { googleMaps: googleMapsScriptLoaded },
    device,

    screenHeight,

  } = app
  const { svgs } = assets
  const { 'listing/index/go-back': goBackLink } = links
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
    shouldDrawPins,
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
    isPinsDrawn,
    mapOptions,
    shouldInitializeMap,
    isPinsDrawn,
    shouldDrawPins,
    title,
    currentPartnerName,
    goBackLink,
    screenHeight,
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
