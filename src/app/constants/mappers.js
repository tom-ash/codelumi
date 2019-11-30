export const mapStateToProps = (store) => {
  const {
    showUserCreate,
    showUserAuthorize,
    showUserPasswordReset,
    showUserAccount
  } = store.app

  return {
    screenSize: store.app.screenSize,
    path: store.app.path,
    scrollY: store.app.scrollY,
    showUserCreate,
    showUserAuthorize,
    showUserPasswordReset,
    showUserAccount
  }
}
  
export const mapDispatchToProps = (dispatch) => {
  return {
    changeUserAuthorizeData: (value) => dispatch({ type: 'user/authorize/data', value: value }),
    changeApp: (value) => dispatch({ type: 'app', value: value})
  }
}