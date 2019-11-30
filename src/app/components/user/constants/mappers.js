export const mapStateToProps = (store) => {
  const {
    language,
    path,
    showUserCreate: showCreate,
    showUserAuthorize: showAuthorize,
    showUserPasswordReset: showPasswordReset,
    showUserAccount: showAccount
  } = store.app

  return {
    language,
    path,
    showCreate,
    showAuthorize,
    showPasswordReset,
    showAccount
  }
}
    
export const mapDispatchToProps = (dispatch) => {
  return {
    changeApp: (value) => dispatch({ type: 'app', value: value }),
    changeControl: (value) => dispatch({ type: 'user/create/control', value: value }),
  }
}
    