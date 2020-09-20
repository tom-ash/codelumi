export const mapStateToProps = (store) => {
  const {
    language,
    path,
    showAnnouncementCreate: showCreate,
    showAnnouncementEdit: showEdit,
    showAnnouncementShow: showShow,
    announcementId,
    showAnnouncementIndexMap: showMap,
    showAnnouncementIndexCatalogue: showCatalogue,
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
    showList,
    showCatalogue
  }
}
    
export const mapDispatchToProps = (dispatch) => {
  return {}
}
    