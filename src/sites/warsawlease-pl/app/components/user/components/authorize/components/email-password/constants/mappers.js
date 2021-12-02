export const mapStateToProps = store => {
  return {
    lang: store.app.lang,
    connecting: store.user.authorize.control.connecting,
    emailError: store.user.authorize.errors.email,
    emailOrPasswordError: store.user.authorize.errors.emailOrPassword,
    rememberMe: store.user.authorize.inputs.rememberMe
  }
}
  
export const mapDispatchToProps = dispatch => {
  return {
    changeApp: value => dispatch({ type: 'app', value }),
    changeEditControl: value => dispatch({ type: 'user/edit/control', value }),
    changeControl: value => dispatch({ type: 'user/authorize/control', value }),
    changeInputs: value => dispatch({ type: 'user/authorize/inputs', value }),
    changeErrors: value => dispatch({ type: 'user/authorize/errors', value }),
    changeData: value => dispatch({ type: 'user/authorize/data', value })
  }
}
  