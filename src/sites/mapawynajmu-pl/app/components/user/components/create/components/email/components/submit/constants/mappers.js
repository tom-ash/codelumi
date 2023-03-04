export const mapStateToProps = store => {
  const { app, render, texts, control, inputs } = store
  const { lang } = app
  const { 'user/create/form': renderUserCreate } = render
  const { connecting } = control
  const { accountType, businessName, emailAddress, password, countryCode, phoneNumber, termsOfServiceConsent } = inputs
  const { termsOfServiceConsentLabel } = texts

  return {
    renderUserCreate,
    lang,
    connecting,
    accountType,
    businessName,
    emailAddress,
    password,
    countryCode,
    phoneNumber,
    termsOfServiceConsent,
    termsOfServiceConsentLabel,
  }
}

export const mapDispatchToProps = dispatch => {
  return {
    setControl: value => dispatch({ type: 'control', value }),
    setData: value => dispatch({ type: 'data', value }),
    setErrors: value => dispatch({ type: 'errors', value }),
    dispatch,
  }
}
