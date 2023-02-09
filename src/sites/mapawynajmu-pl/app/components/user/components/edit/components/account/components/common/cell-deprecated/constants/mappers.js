export const mapStateToProps = store => {
  const { app, control, data } = store
  const { lang } = app
  const { phoneStage, emailStage, passwordStage, destroyStage } = control
  const { countryCode: phonephoneCodeCurrentValue, phoneNumber: phoneBodyCurrentValue, email: emailCurrentValue } = data

  return {
    lang,
    phoneStage,
    emailStage,
    passwordStage,
    destroyStage,
    phonephoneCodeCurrentValue,
    phoneBodyCurrentValue,
    emailCurrentValue,
  }
}

export const mapDispatchToProps = dispatch => {
  return {
    setControl: value => dispatch({ type: 'control', value }),
    setData: value => dispatch({ type: 'data', value }),
    setErrors: value => dispatch({ type: 'errors', value }),
  }
}
