export const mapStateToProps = store => {
  return {
    lang: store.app.lang,
    termsAndPrivacyConsent: store.user.create.inputs.termsAndPrivacyConsent,
    termsError: store.user.create.errors.termsAndPrivacyConsent,
    privacyError: store.user.create.errors.privacy
  }
}

export const mapDispatchToProps = dispatch => {
  return {
    changeApp: value => dispatch({ type: 'app', value }),
    changeRender: value => dispatch({ type: 'render', value }),
    changeInputs: value => dispatch({ type: 'user/create/inputs', value }),
    changeErrors: value => dispatch({ type: 'user/create/errors', value })
  }
}
