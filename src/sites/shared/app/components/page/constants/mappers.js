export const mapStateToProps = store => {
  const {
    name: showName
  } = store.page.show.data

  const {
    'page/edit': renderEdit,
    'page/index': renderIndex,
    'page/show': renderShow,
    'page/not-found': renderNotFound
  } = store.render

  return {
    renderEdit,
    renderIndex,
    renderShow,
    renderNotFound,
    showName
  }
}
  
export const mapDispatchToProps = dispatch => {
  return {
    changeShowData: value => dispatch({ type: 'page/show/data', value })
  }
}
