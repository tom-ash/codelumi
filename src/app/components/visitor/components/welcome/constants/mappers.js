export const mapStateToProps = (store) => {
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
    language: store.app.language,
    showAnnouncementIndexMap: store.app.showAnnouncementIndexMap,
    showAnnouncementIndexCatalogue: store.app.showAnnouncementIndexCatalogue,
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
  