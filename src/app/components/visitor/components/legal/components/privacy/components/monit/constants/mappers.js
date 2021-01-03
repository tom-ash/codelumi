export const mapStateToProps = (store) => {
  return {
    language: store.app.language
  }
}
    
export const mapDispatchToProps = (dispatch) => {
  return {
    changeApp: value => dispatch({ type: 'app', value }),
    changeRender: value => dispatch({ type: 'render', value }),
    changeSettings: value => dispatch({ type: 'visitor/privacy/settings', value })
  }
}
    