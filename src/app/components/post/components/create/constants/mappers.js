export const mapStateToProps = (store) => {
  const {
    language
  } = store.app

  const {
    posts
  } = store.post.index.data

  const {
    name,
    meta,
    url,
    title,
    body
  } = store.post.create.inputs

  return {
    name,
    meta,
    url,
    title,
    body,
    language,
    posts
  }
}
    
export const mapDispatchToProps = (dispatch) => {
  return {
    changeInputs: value => dispatch({ type: 'post/create/inputs', value }),
    resetInputs: value => dispatch({ type: 'post/create/inputs/reset', value }),
    changePostIndexData: value => dispatch({ type: 'post/index/data', value })
  }
}
    