export const mapStateToProps = (store) => {
  const {
    language,
    path,
    showUserEditPasswordReset: showPasswordReset,
    showUserEditAccount: showAccount
  } = store.app

  return {
    language,
    path,
    showPasswordReset,
    showAccount
  }
}
    
export const mapDispatchToProps = (dispatch) => {
  return {}
}
    