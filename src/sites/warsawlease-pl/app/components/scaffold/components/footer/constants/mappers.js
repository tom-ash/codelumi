export const mapStateToProps = store => {
  const {
    lang
  } = store.app

  return {
    lang
  }
}
  
export const mapDispatchToProps = (dispatch) => {
  return {
    changeApp: value => dispatch({ type: 'app', value }),
    changeRender: value => dispatch({ type: 'render', value })
  }
}
  