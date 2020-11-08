export const mapStateToProps = (store) => {
  const {
    language,
    path,
    isMobile,
    device,
    showAnnouncementIndexMap: showMap,
    showAnnouncementIndexList: showList,
    showAnnouncementIndexCatalogue: showCatalogue,
    scalableVectorGraphics,
  } = store.app

  const {
    category: currentCategory
  } = store.announcement.index.inputs

  return {
    language,
    path,
    isMobile,
    device,
    showMap,
    showList,
    showCatalogue,
    scalableVectorGraphics,
    currentCategory
  }
}
    
export const mapDispatchToProps = (dispatch) => {
  return {
    changeInputs: value => dispatch({ type: 'announcement/index/inputs', value }),
    changeControl: value => dispatch({ type: 'announcement/index/control', value })
  }
}
