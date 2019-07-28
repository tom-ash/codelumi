export const mapStateToProps = (store) => {
  return {
    path: store.app.path
  }
}
  
export const mapDispatchToProps = (dispatch) => {
  return {
    changePath: (value) => dispatch({ type: 'app/path', value: value})
  }
}