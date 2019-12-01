export const mapStateToProps = (store) => {
  const {
    showUserCreate,
    showUserAuthorize,
    showUserEditPasswordReset,
    showUserEditPhoneVerify,
    showUserEditAccount,
    showUserShow
  } = store.app

  return {
    screenSize: store.app.screenSize,
    path: store.app.path,
    scrollY: store.app.scrollY,
    showUserCreate,
    showUserAuthorize,
    showUserEditPasswordReset,
    showUserEditPhoneVerify,
    showUserEditAccount,
    showUserShow
  }
}
  
export const mapDispatchToProps = (dispatch) => {
  return {
    changeUserAuthorizeData: (value) => dispatch({ type: 'user/authorize/data', value: value }),
    changeApp: (value) => dispatch({ type: 'app', value: value})
  }
}