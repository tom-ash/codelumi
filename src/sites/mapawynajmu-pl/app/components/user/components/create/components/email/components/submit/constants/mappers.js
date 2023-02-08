export const mapStateToProps = store => {
  const { 'user/create/form': renderUserCreate } = store.render
  const { lang } = store.app
  const { accountType, businessName, emailAddress, password, countryCode, phoneNumber, termsAndPrivacyConsent } =
    store.user.create.inputs
  const { connecting } = store.user.create.control

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
    termsAndPrivacyConsent,
  }
}

export const mapDispatchToProps = dispatch => {
  return {
    changeAuthorized: value => dispatch({ type: 'user/authorize/authorized', value }),
    setControl: value => dispatch({ type: 'user/create/control', value }),
    changeData: value => dispatch({ type: 'user/create/data', value }),
    changeErrors: value => dispatch({ type: 'user/create/errors', value }),
    dispatch,
  }
}
