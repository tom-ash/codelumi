export const mapStateToProps = (store) => {
  const {
    lang,
    svgs
  } = store.app

  const {
    admin: isAdmin
  } = store.user.authorize.data

  const {
    data: postData
  } = store.page.show

  const {
    name,
    standalone
  } = postData

  const {
    name: nameCreate
  } = store.page.create.inputs

  return {
    name,
    postData,
    isAdmin,
    beingEdited: name === nameCreate,
    svgs,
    lang,
    standalone
  }
}
  
export const mapDispatchToProps = (dispatch) => {
  return {
    changeData: value => dispatch({ type: 'page/show/data', value }),
    changeRender: value => dispatch({ type: 'page/render', value })
  }
}
