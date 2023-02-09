export const mapStateToProps = store => {
  const { app, control, data, inputs, errors } = store
  const { lang } = app
  const { phoneConnecting: connecting, phoneStage: stage } = control
  const { phoneNumber: body } = data
  const { countryCode } = inputs
  const { phone: error } = errors

  return {
    lang,
    connecting,
    stage,
    body,
    countryCode,
    error,
  }
}

export const mapDispatchToProps = dispatch => {
  return {
    setControl: value => dispatch({ type: 'control', value }),
    setInputs: value => dispatch({ type: 'inputs', value }),
    setErrors: value => dispatch({ type: 'errors', value }),
    setData: value => dispatch({ type: 'data', value }),
  }
}
