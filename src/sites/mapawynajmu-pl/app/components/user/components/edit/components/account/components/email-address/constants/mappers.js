export const mapStateToProps = store => {
  const { app, control, data, errors } = store
  const { lang } = app
  const { emailConnecting: connecting, emailStage: stage, emailStep: step } = control
  const { email: currentValue } = data
  const {
    currentEmailVerification: currentEmailVerificationError,
    newEmail: newEmailError,
    newEmailVerification: newEmailVerificationError,
    newEmailPassword: newEmailPasswordError,
  } = errors

  return {
    lang,
    connecting,
    stage,
    step,
    currentValue,
    currentEmailVerificationError,
    newEmailError,
    newEmailVerificationError,
    newEmailPasswordError,
  }
}

export const mapDispatchToProps = dispatch => {
  return {
    setControl: value => dispatch({ type: 'control', value }),
    setData: value => dispatch({ type: 'data', value }),
    setErrors: value => dispatch({ type: 'errors', value }),
  }
}
