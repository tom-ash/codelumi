export const mapStateToProps = (store) => {
  const {
    language,

  } = store.app


  return {
    showDescription,

  }
}
    
export const mapDispatchToProps = (dispatch) => {
  return {
    changeApp: value => dispatch({ type: 'app', value: value})
  }
}
    