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
    additionalFunctionsConsent,
    statisticsAndMarketingConsent
  } = store.visitor.legal.privacy.settings

  return {
    showPrivacySettings,
    language: store.app.language,
    path: store.app.path,
    consents: store.visitor.legal.privacy.settings.consents,
    language: store.app.language,
    path: store.app.path,
    showCreate,
    showAuthorize,
    showAbout,
    showContact,
    showTermsOfService,
    showCookiesPolicy,
    showPrivacyPolicy,
    showPrivacySettings,
    additionalFunctionsConsent,
    statisticsAndMarketingConsent
  }
}
    
export const mapDispatchToProps = (dispatch) => {
  return {
    changeApp: (value) => dispatch({ type: 'app', value: value}),
    changeSettings: (value) => dispatch({ type: 'visitor/privacy/settings', value: value })
  }
}
    