export const mapStateToProps = (store) => {
  const { showUserEditPasswordReset: showReset } = store.app

  return {
    language: store.app.language,
    path: store.app.path,
    connecting: store.user.edit.control.passwordConnecting,
    stage: store.user.edit.control.passwordStage,
    step: store.user.edit.control.passwordStep,
    error: store.user.edit.errors.password,
    showReset
  }
}
    
export const mapDispatchToProps = (dispatch) => {
  return {
    changeControl: (value) => dispatch({ type: 'user/edit/control', value: value }),
    changeData: (value) => dispatch({ type: 'user/edit/data', value: value }),
    changeErrors: (value) => dispatch({ type: 'user/edit/errors', value: value })
  }
}
    