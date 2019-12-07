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
    changeSettings: (value) => dispatch({
      type: 'visitor/privacy/settings',
      value: value
    })
  }
}
    