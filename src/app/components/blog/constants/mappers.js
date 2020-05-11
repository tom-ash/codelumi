export const mapStateToProps = (store) => {
  const {
    language,
    path
  } = store.app
  
  return {
    language,
    path
  }
}
    
export const mapDispatchToProps = (dispatch) => {
  return {}
}
    