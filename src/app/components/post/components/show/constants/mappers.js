export const mapStateToProps = (store) => {
  const {
    language,
    scalableVectorGraphics
  } = store.app

  const {
    admin: isAdmin
  } = store.user.authorize.data

  const {
    name,
    title,
    body
  } = store.post.show.data

  const {
    name: nameCreate
  } = store.post.create.inputs

  return {
    language,
    name,
    title,
    body,
    isAdmin,
    beingEdited: name === nameCreate,
    scalableVectorGraphics
  }
}
  
export const mapDispatchToProps = (dispatch) => {
  return {
    changeData: value => dispatch({ type: 'post/show/data', value }),
    changeRender: value => dispatch({ type: 'post/render', value: value})
  }
}
