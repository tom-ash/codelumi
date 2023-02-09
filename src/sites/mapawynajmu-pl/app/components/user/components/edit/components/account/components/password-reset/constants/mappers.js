export const mapStateToProps = store => {
  const {
    lang,
    path,
    control,
    errors
  } = store
  const { passwordConnecting: connecting, passwordStage: stage, passwordStep: step } = control
  const { password: error } = errors

  return {
    lang,
    path,
    connecting,
    stage,
    step,
    error,
  }
}

export const mapDispatchToProps = dispatch => {
  return {
    changeApp: value => dispatch({ type: 'app', value }),
    setControl: value => dispatch({ type: 'control', value }),
    setData: value => dispatch({ type: 'data', value }),
    setErrors: value => dispatch({ type: 'errors', value }),
  }
}
