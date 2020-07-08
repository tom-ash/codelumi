export const mapStateToProps = store => {
  const {
    language
  } = store.app

  const {
    name: editedName
  } = store.post.create.inputs

  const {
    posts
  } = store.post.index.data

  const {
    admin
  } = store.user.authorize.data

  return {
    language,
    editedName,
    posts,
    admin
  }
}
  
export const mapDispatchToProps = (dispatch) => {
  return {
    changePostCreateInputs: value => dispatch({ type: 'post/create/inputs', value }),
    changePostIndexData: value => dispatch({ type: 'post/index/data', value })
  }
}
  