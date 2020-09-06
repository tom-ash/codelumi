export const mapStateToProps = (store) => {
  // const { }
  return {
    language: store.app.language
  }
}
    
export const mapDispatchToProps = (dispatch) => {
  return {
    changeApp: (value) => dispatch({ type: 'app', value: value}),
    changeSettings: (value) => dispatch({ type: 'visitor/privacy/settings', value })
  }
}
    