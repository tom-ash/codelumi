export const mapStateToProps = (store) => {
  const {
    language,
    scalableVectorGraphics
  } = store.app

  const {
    admin: isAdmin
  } = store.user.authorize.data

  const {
    data: postData
  } = store.post.show

  const {
    name,
    standalone
  } = postData

  const {
    name: nameCreate
  } = store.post.create.inputs

  return {
    name,
    postData,
    isAdmin,
    beingEdited: name === nameCreate,
    scalableVectorGraphics,
    language,
    standalone
  }
}
  
export const mapDispatchToProps = (dispatch) => {
  return {
    changeData: value => dispatch({ type: 'post/show/data', value }),
    changeRender: value => dispatch({ type: 'post/render', value: value})
  }
}
