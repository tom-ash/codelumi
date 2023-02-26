export const mapStateToProps = store => {
  const { app, links, control, inputs, errors } = store
  const { lang } = app
  const { connecting } = control
  const { rememberMe } = inputs
  const { email: emailError, emailOrPassword: emailOrPasswordError } = errors

  return {
    links,
    lang,
    connecting,
    rememberMe,
    emailError,
    emailOrPasswordError,
  }
}

export const mapDispatchToProps = dispatch => {
  return {
    setControl: value => dispatch({ type: 'control', value }),
    setInputs: value => dispatch({ type: 'inputs', value }),
    setErrors: value => dispatch({ type: 'errors', value }),
  }
}
