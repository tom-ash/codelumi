export const mapStateToProps = (store) => {
  const {
    lang,
    path
  } = store.app

  return {
    lang,
    path
  }
}
    
export const mapDispatchToProps = (dispatch) => {
  return {}
}
    