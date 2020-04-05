export const mapStateToProps = (store) => {
  return {
    language: store.app.language,
    showAnnouncementIndexMap: store.app.showAnnouncementIndexMap,
    showAnnouncementIndexList: store.app.showAnnouncementIndexList
  }
}
  
export const mapDispatchToProps = (dispatch) => {
  return {}
}
  