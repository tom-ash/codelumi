export const mapStateToProps = (store) => {
  const {
    showUser
  } = store.app

  return {
    screenSize: store.app.screenSize,
    path: store.app.path,
    scrollY: store.app.scrollY,
    showUser
    // showUser: true
  }
}
  
export const mapDispatchToProps = (dispatch) => {
  return {
    changeUserAuthorizeData: (value) => dispatch({ type: 'user/authorize/data', value: value }),
    changeScreenSize: (value) => dispatch({ type: 'SET_SCREEN_RESOLUTION', value: value}),
    changePath: (value) => dispatch({ type: 'app/path', value: value}),
    changeScripts: (value) => dispatch({ type: 'app/scripts', value: value}),
    changeIsMobile: (value) => dispatch({ type: 'app/isMobile', value: value}),
    changeScrollY: (value) => dispatch({ type: 'app/scrollY', value: value}),

    
  }
}