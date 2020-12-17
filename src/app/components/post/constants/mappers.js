export const mapStateToProps = (store) => {
  const {
    create: renderCreate,
    index: renderIndex,
    show: renderShow
  } = store.post.render

  const {
    name: showName
  } = store.post.show.data

  return {
    renderCreate,
    renderIndex,
    renderShow,
    showName
  }
}
  
export const mapDispatchToProps = (dispatch) => {
  return {
    changeShowData: value => dispatch({ type: 'post/show/data', value })
  }
}
