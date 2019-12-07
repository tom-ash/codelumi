export const mapStateToProps = (store) => {
  const {
    language,
    path,
    showAnnouncementCreate: showCreate,
    showAnnouncementEdit: showEdit,
    announcementId,
    showAnnouncementIndexVisitor: showVisitor,
    showAnnouncementIndexUser: showUser
  } = store.app
  
  return {
    language,
    path,
    showCreate,
    showEdit,
    announcementId,
    showVisitor,
    showUser
  }
}
    
export const mapDispatchToProps = (dispatch) => {
  return {}
}
    