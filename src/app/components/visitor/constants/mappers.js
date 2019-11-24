export const mapStateToProps = (store) => {
  const { showAbout, showContact, showTermsOfService, showPrivacyMonit, showPrivacyPolicy, showCookiesPolicy,
          showPrivacySettings } = store.app


          // TODO
          // console.log(showAbout)

  return {
    showAbout, showContact, showTermsOfService, showPrivacyMonit, showPrivacyPolicy, showCookiesPolicy,
    showPrivacySettings,
    language: store.app.language,
    path: store.app.path,
    consents: store.visitor.legal.privacy.settings.consents
  }
}
    
export const mapDispatchToProps = (dispatch) => {
  return {
    changeSettings: (value) => dispatch({
      type: 'visitor/privacy/settings',
      value: value
    }),
  }
}
    