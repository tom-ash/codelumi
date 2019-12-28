export const mapStateToProps = (store) => {
  const {
    statisticsConsent,
    marketingConsent
  } = store.visitor.legal.privacy.settings

  return {
    language: store.app.language,
    statisticsConsent,
    marketingConsent
  }
}
    
export const mapDispatchToProps = (dispatch) => {
  return {
    changeApp: (value) => dispatch({ type: 'app', value: value}),
    changeSettings: (value) => dispatch({ type: 'visitor/privacy/settings', value: value })
  }
}
    