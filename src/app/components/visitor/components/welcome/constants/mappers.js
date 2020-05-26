export const mapStateToProps = (store) => {
  return {
    language: store.app.language,
    showAnnouncementIndexMap: store.app.showAnnouncementIndexMap,
    showAnnouncementIndexCatalogue: store.app.showAnnouncementIndexCatalogue
  }
}
  
export const mapDispatchToProps = (dispatch) => {
  return {}
}
  