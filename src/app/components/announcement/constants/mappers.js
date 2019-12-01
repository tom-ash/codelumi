export const mapStateToProps = (store) => {
  const {
    language,
    path,
    showAnnouncementCreate: showCreate,
    showAnnouncementIndexVisitor: showVisitor,
    showAnnouncementIndexUser: showUser
  } = store.app
  
  return {
    language,
    path,
    showCreate,
    showVisitor,
    showUser
  }
}
    
export const mapDispatchToProps = (dispatch) => {
  return {}
}
    