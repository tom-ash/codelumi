export const mapStateToProps = (store) => {
  const {
    language,
    path,
    showUserEditPasswordReset: showPasswordReset,
    showUserEditPhoneVerify: showPhoneVerify,
    showUserEditAccount: showAccount
  } = store.app

  return {
    language,
    path,
    showPasswordReset,
    showPhoneVerify,
    showAccount
  }
}
    
export const mapDispatchToProps = (dispatch) => {
  return {}
}
    