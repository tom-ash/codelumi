export const mapStateToProps = store => {
  const {
    statisticsConsent,
    marketingConsent
  } = store.visitor.legal.privacy.settings

  return {
    lang: store.app.lang,
    statisticsConsent,
    marketingConsent
  }
}
    
export const mapDispatchToProps = (dispatch) => {
  return {
    changeApp: value => dispatch({ type: 'app', value }),
    changeRender: value => dispatch({ type: 'render', value }),
    changeSettings: value => dispatch({ type: 'visitor/privacy/settings', value })
  }
}
    