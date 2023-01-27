export const mapStateToProps = store => {
  const {
    lang,
    isMobile,
    scripts: { googleMaps: googleMapsScriptLoaded },
    device,
  } = store.app
  const { svgs } = store.assets

  const {
    'listing/index/go-back': goBackLink
  } = store.links

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
  } = store.announcement.index.control

  const {
    announcements,
    pins,
    tileId,
    tile,
    title,
    partnerName,
  } = store.announcement.index.data

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
    partnerName,
    goBackLink,
  }
}

export const mapDispatchToProps = dispatch => {
  return {
    changeApp: value => dispatch({ type: 'app', value }),
    changeControl: value => dispatch({ type: 'announcement/index/control', value }),
    changeInputs: value => dispatch({ type: 'announcement/index/inputs', value }),
    changeData: value => dispatch({ type: 'announcement/index/data', value }),
    changeTile: value => dispatch({ type: 'announcement/index/data/map/tile', value }),
    resetControl: value => dispatch({ type: 'announcement/index/control/reset', value }),
    resetInputs: value => dispatch({ type: 'announcement/index/inputs/reset', value }),
    resetData: value => dispatch({ type: 'announcement/index/data/reset', value }),
  }
}
