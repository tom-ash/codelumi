export const mapStateToProps = store => {
  const { app, control, data, errors } = store
  const { lang } = app
  const { connecting, destroyStage: stage, destroyStep: step } = control
  const { email } = data
  const { verification: error } = errors

  return {
    lang,
    connecting,
    stage,
    step,
    email,
    error,
  }
}

export const mapDispatchToProps = dispatch => {
  return {
    setApp: value => dispatch({ type: 'app', value }),
    setControl: value => dispatch({ type: 'control', value }),
    setErrors: value => dispatch({ type: 'errors', value }),
    dispatch,
  }
}
