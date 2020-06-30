export const mapStateToProps = (store) => {
  const {
    language,
    path,
    isMobile,
    device,
    showAnnouncementIndexMap: showMap,
    showAnnouncementIndexList: showList
  } = store.app

  return {
    language,
    path,
    isMobile,
    device,
    showMap,
    showList
  }
}
    
export const mapDispatchToProps = (dispatch) => {
  return {
    changeControl: (value) => dispatch({ type: 'announcement/index/control', value: value })
  }
}
