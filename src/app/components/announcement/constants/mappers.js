export const mapStateToProps = (store) => {
  const {
    language,
    path,
    showAnnouncementCreate: showCreate,
    showAnnouncementEdit: showEdit,
    showAnnouncementShow: showShow,
    announcementId,
    showAnnouncementIndexMap: showMap,
    showAnnouncementIndexList: showList
  } = store.app
  
  return {
    language,
    path,
    showCreate,
    showEdit,
    showShow,
    announcementId,
    showMap,
    showList
  }
}
    
export const mapDispatchToProps = (dispatch) => {
  return {}
}
    