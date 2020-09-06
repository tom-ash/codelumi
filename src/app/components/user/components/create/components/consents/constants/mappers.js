export const mapStateToProps = (store) => {
  return {
    language: store.app.language,
    termsAndPrivacyConsent: store.user.create.inputs.termsAndPrivacyConsent,
    termsError: store.user.create.errors.termsAndPrivacyConsent,
    privacyError: store.user.create.errors.privacy
  }
}

export const mapDispatchToProps = (dispatch) => {
  return {
    changeApp: (value) => dispatch({ type: 'app', value: value}),
    changeInputs: (value) => dispatch({ type: 'user/create/inputs', value }),
    changeErrors: (value) => dispatch({ type: 'user/create/errors', value })
  }
}
