export const mapStateToProps = (store) => {
  const {
    showUserCreate: showCreate,
    showUserAuthorize: showAuthorize,
    showVisitorAbout: showAbout,
    showVisitorContact: showContact,
    showVisitorTermsOfService: showTermsOfService,
    showVisitorCookiesPolicy: showCookiesPolicy,
    showVisitorPrivacyPolicy: showPrivacyPolicy,
    showVisitorPrivacySettings: showPrivacySettings
  } = store.app

  const {
    statisticsConsent,
    marketingConsent
  } = store.visitor.legal.privacy.settings

  return {
    showPrivacySettings,
    language: store.app.language,
    path: store.app.path,
    consents: store.visitor.legal.privacy.settings.consents,
    language: store.app.language,
    showCreate,
    showAuthorize,
    showAbout,
    showContact,
    showTermsOfService,
    showCookiesPolicy,
    showPrivacyPolicy,
    showPrivacySettings,
    statisticsConsent,
    marketingConsent
  }
}
    
export const mapDispatchToProps = (dispatch) => {
  return {
    changeApp: (value) => dispatch({ type: 'app', value: value}),
    changeSettings: (value) => dispatch({ type: 'visitor/privacy/settings', value })
  }
}
    