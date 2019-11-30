export const mapStateToProps = (store) => {
  const { showUserPasswordReset: showPasswordReset } = store.app

  return {
    language: store.app.language,
    path: store.app.path,
    showPasswordReset
  }
}
    
export const mapDispatchToProps = (dispatch) => {
  return {}
}
    