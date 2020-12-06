export const mapStateToProps = (store) => {
  const {
    language
  } = store.app

  const {
    name,
    title,
    body
  } = store.post.create.inputs

  return {
    language,
    name,
    title,
    body
  }
}
  
export const mapDispatchToProps = (dispatch) => {
  return {
    changeInputs: value => dispatch({ type: 'post/create/inputs', value }),
    resetInputs: value => dispatch({ type: 'post/create/inputs/reset', value }),
    changePostIndexData: value => dispatch({ type: 'post/index/data', value }),
    changeApp: value => dispatch({ type: 'app', value })
  }
}