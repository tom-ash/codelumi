export const mapStateToProps = (store) => {
  return {
    language: store.app.language,
    path: store.app.path,
    fullSearchInitiated: store.announcement.index.control.full.searchInitiated
  }
}
    
export const mapDispatchToProps = (dispatch) => {
  return {}
}
    