export const mapStateToProps = (store) => {
  return {
    language: store.app.language,
    email: store.user.edit.data.email,
    connecting: store.user.destroy.control.connecting,
    stage: store.user.destroy.control.stage,
    step: store.user.destroy.control.step,
    error: store.user.destroy.errors.verification
  }
}
    
export const mapDispatchToProps = (dispatch) => {
  return {
    resetAuthorizeData: (value) => dispatch({ type: 'user/authorize/data/reset', value: value }),
    changeControl: (value) => dispatch({ type: 'user/destroy/control', value: value }),
    resetControl: (value) => dispatch({ type: 'user/destroy/control/reset', value: value }),
    changeErrors: (value) => dispatch({ type: 'user/destroy/errors', value: value }),
    resetErrors: (value) => dispatch({ type: 'user/destroy/errors/reset', value: value })
  }
}
    