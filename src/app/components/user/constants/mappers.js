export const mapStateToProps = (store) => {
  const { showUserCreate: showCreate, showUserAuthorize: showAuthorize } = store.app

  return {
    language: store.app.language,
    path: store.app.path,
    showCreate,
    showAuthorize
  }
}
    
export const mapDispatchToProps = (dispatch) => {
  return {
    changeApp: (value) => dispatch({ type: 'app', value: value }),
    changeControl: (value) => dispatch({ type: 'user/create/control', value: value }),
  }
}
    