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
    changeData: value => dispatch({ type: 'post/show/data', value })
  }
}
