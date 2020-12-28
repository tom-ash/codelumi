export const mapStateToProps = (store) => {
  const {
    TODO
  } = store.app

  const {
    statisticsConsent,
    marketingConsent
  } = store.visitor.legal.privacy.settings

  return {
    TODO,
    language: store.app.language,
    path: store.app.path,
    consents: store.visitor.legal.privacy.settings.consents,
    language: store.app.language,
    TODO,
    statisticsConsent,
    marketingConsent
  }
}
    
export const mapDispatchToProps = (dispatch) => {
  return {
    changeApp: value => dispatch({ type: 'app', value: value}),
    changeSettings: value => dispatch({ type: 'visitor/privacy/settings', value })
  }
}
    