export const mapStateToProps = (store) => {
  const {
    language,
    path,
    isMobile,
    screenSize,
    showAnnouncementIndexVisitor: showVisitor,
    showAnnouncementIndexUser: showUser
  } = store.app

  return {
    language,
    path,
    isMobile,
    screenSize,
    showVisitor,
    showUser
  }
}
    
export const mapDispatchToProps = (dispatch) => {
  return {
    changeControl: (value) => dispatch({ type: 'announcement/index/control', value: value })
  }
}
