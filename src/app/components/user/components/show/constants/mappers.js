export const mapStateToProps = (store) => {
  return {
    language: store.app.language,
    path: store.app.path
  }
}
    
export const mapDispatchToProps = (dispatch) => {
  return {
    changePath: (value) => dispatch({ type: 'app/path', value: value}),
    
  }
}
    