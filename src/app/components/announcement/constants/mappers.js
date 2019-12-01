export const mapStateToProps = (store) => {
  const {
    language,
    path,
    showAnnouncementCreate: showCreate,
    showAnnouncementIndexVisitor: showIndexVisitor,
    showAnnouncementIndexUser: showIndexUser
  } = store.app
  
  return {
    language,
    path,
    showCreate,
    showIndexVisitor,
    showIndexUser
  }
}
    
export const mapDispatchToProps = (dispatch) => {
  return {}
}
    