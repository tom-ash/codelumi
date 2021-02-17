export const mapStateToProps = store => {
  return {
    lang: store.app.lang
  }
}
    
export const mapDispatchToProps = dispatch => {
  return {
    changeApp: value => dispatch({ type: 'app', value }),
    changeRender: value => dispatch({ type: 'render', value }),
    changeSettings: value => dispatch({ type: 'visitor/privacy/settings', value })
  }
}
    