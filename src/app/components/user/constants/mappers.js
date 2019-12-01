export const mapStateToProps = (store) => {
  const {
    language,
    path,
    showUserCreate: showCreate,
    showUserAuthorize: showAuthorize,
    showUserEditPasswordReset: showPasswordReset,
    showUserEditPhoneVerify: showEditPhoneVerify,
    showUserEditAccount: showEdit,
    showUserShow: showAccount
  } = store.app

  return {
    language,
    path,
    showCreate,
    showAuthorize,
    showPasswordReset,
    showEditPhoneVerify,
    showAccount,
    showEdit
  }
}
    
export const mapDispatchToProps = (dispatch) => {
  return {
    changeApp: (value) => dispatch({ type: 'app', value: value }),
    changeControl: (value) => dispatch({ type: 'user/create/control', value: value }),
  }
}
    