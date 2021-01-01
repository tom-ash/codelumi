export const mapStateToProps = (store) => {
  const {
    language
  } = store.app

  return {
    language
  }
}
  
export const mapDispatchToProps = (dispatch) => {
  return {
    changeApp: value => dispatch({ type: 'app', value }),
    changeRender: value => dispatch({ type: 'render', value })
  }
}
  