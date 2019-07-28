export const mapStateToProps = (store) => {
  return {
    language: store.app.language,
    connecting: store.user.edit.control.emailConnecting,
    currentValue: store.user.edit.data.email,
    stage: store.user.edit.control.emailStage,
    step: store.user.edit.control.emailStep,
    currentEmailVerificationError: store.user.edit.errors.currentEmailVerification,
    newEmailError: store.user.edit.errors.newEmail,
    newEmailVerificationError: store.user.edit.errors.newEmailVerification,
    newEmailPasswordError: store.user.edit.errors.newEmailPassword
  }
}
    
export const mapDispatchToProps = (dispatch) => {
  return {
    changeControl: (value) => dispatch({ type: 'user/edit/control', value: value }),
    changeData: (value) => dispatch({ type: 'user/edit/data', value: value }),
    changeErrors: (value) => dispatch({ type: 'user/edit/errors', value: value })
  }
}
    