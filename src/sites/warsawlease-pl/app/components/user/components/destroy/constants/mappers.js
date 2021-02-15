export const mapStateToProps = store => {
  return {
    lang: store.app.lang,
    email: store.user.edit.data.email,
    connecting: store.user.destroy.control.connecting,
    stage: store.user.destroy.control.stage,
    step: store.user.destroy.control.step,
    error: store.user.destroy.errors.verification
  }
}
    
export const mapDispatchToProps = (dispatch) => {
  return {
    changeApp: value => dispatch({ type: 'app', value }),
    changeRender: value => dispatch({ type: 'render', value }),
    resetAuthorizeData: value => dispatch({ type: 'user/authorize/data/reset', value }),
    changeControl: value => dispatch({ type: 'user/destroy/control', value }),
    resetControl: value => dispatch({ type: 'user/destroy/control/reset', value }),
    changeErrors: value => dispatch({ type: 'user/destroy/errors', value }),
    resetErrors: value => dispatch({ type: 'user/destroy/errors/reset', value })
  }
}
    