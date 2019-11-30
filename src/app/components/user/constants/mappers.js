export const mapStateToProps = (store) => {
  const {
    language,
    path,
    showUserCreate: showCreate,
    showUserAuthorize: showAuthorize,
    showUserPasswordReset: showPasswordReset
  } = store.app

  return {
    language,
    path,
    showCreate,
    showAuthorize,
    showPasswordReset
  }
}
    
export const mapDispatchToProps = (dispatch) => {
  return {
    changeApp: (value) => dispatch({ type: 'app', value: value }),
    changeControl: (value) => dispatch({ type: 'user/create/control', value: value }),
  }
}
    