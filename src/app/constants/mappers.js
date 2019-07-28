export const mapStateToProps = (store) => {
  return {
    screenSize: store.app.screenSize,
    path: store.app.path
  }
}
  
export const mapDispatchToProps = (dispatch) => {
  return {
    changeUserAuthorizeData: (value) => dispatch({ type: 'user/authorize/data', value: value }),
    changeScreenSize: (value) => dispatch({ type: 'SET_SCREEN_RESOLUTION', value: value}),
    changePath: (value) => dispatch({ type: 'app/path', value: value}),
    changeScripts: (value) => dispatch({ type: 'app/scripts', value: value})
  }
}