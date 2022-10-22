export const mapStateToProps = store => {
  const { lang } = store.app

  const {
    'visitor/cookies-policy': renderCookiesPolicy,
    'visitor/privacy-settings': renderPrivacySettings,
    'visitor/terms-of-service': renderTermsOfService,
    'visitor/privacy-policy': renderPrivacyPolicy,
    'visitor/contact': renderContact,
  } = store.render
  const { statisticsConsent, marketingConsent } = store.visitor.consents

  return {
    lang,
    renderPrivacySettings,
    renderCookiesPolicy,
    renderPrivacyPolicy,
    renderTermsOfService,
    renderContact,
    statisticsConsent,
    marketingConsent,
  }
}

export const mapDispatchToProps = dispatch => {
  return {
    changeApp: value => dispatch({ type: 'app', value }),
    changeConsents: value => dispatch({ type: 'visitor/consents', value }),
  }
}
