export const mapStateToProps = (store) => {
  const {
    language,
    path,
    showAnnouncementCreate: showCreate,
    showAnnouncementEdit: showEdit,
    showAnnouncementShow: showShow,
    announcementId,
    showAnnouncementIndexMap: showVisitor,
    showAnnouncementIndexAdded: showUser
  } = store.app
  
  return {
    language,
    path,
    showCreate,
    showEdit,
    showShow,
    announcementId,
    showVisitor,
    showUser
  }
}
    
export const mapDispatchToProps = (dispatch) => {
  return {}
}
    