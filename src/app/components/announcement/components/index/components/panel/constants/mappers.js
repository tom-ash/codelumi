export const mapStateToProps = (store) => {
  const { language, isMobile, screenSize, path } = store.app

  return {
    isMobile,
    screenSize,
    path
  }
}
    
export const mapDispatchToProps = (dispatch) => {
  return {
    changeControl: (value) => dispatch({ type: 'announcement/index/control', value: value })
  }
}
