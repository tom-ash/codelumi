export const mapStateToProps = (store) => {
  const {
    language,
    path,
    TODO
  } = store.app

  return {
    language,
    path,
    TODO
  }
}
    
export const mapDispatchToProps = (dispatch) => {
  return {}
}
    