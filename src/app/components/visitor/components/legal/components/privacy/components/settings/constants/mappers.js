export const mapStateToProps = (store) => {
  const {
    additionalFunctionsConsent,
    statisticsAndMarketingConsent
  } = store.visitor.legal.privacy.settings

  return {
    language: store.app.language,
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
    