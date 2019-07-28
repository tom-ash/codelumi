export const mapStateToProps = (store) => {
  return {
    language: store.app.language,
    consents: store.visitor.legal.privacy.settings.consents
  }
}
    
export const mapDispatchToProps = (dispatch) => {
  return {
    changeSettings: (value) => dispatch({ type: 'visitor/privacy/settings', value: value }),
    changePath: (value) => dispatch({ type: 'app/path', value: value }),
    changeLanguage: (value) => dispatch({ type: 'APP_LANGUAGE', value: value }),
  }
}
    