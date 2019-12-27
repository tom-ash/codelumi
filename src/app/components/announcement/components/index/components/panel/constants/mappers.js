export const mapStateToProps = (store) => {
  const {
    language,
    path,
    isMobile,
    device,
    showAnnouncementIndexVisitor: showVisitor,
    showAnnouncementIndexUser: showUser
  } = store.app

  return {
    language,
    path,
    isMobile,
    device,
    showVisitor,
    showUser
  }
}
    
export const mapDispatchToProps = (dispatch) => {
  return {
    changeControl: (value) => dispatch({ type: 'announcement/index/control', value: value })
  }
}
