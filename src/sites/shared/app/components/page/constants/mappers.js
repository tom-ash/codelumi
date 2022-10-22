export const mapStateToProps = store => {
  const { name: showName } = store.page.show.data

  const {
    'page/show': renderShow,
    'page/edit': renderEdit,
    'page/index': renderIndex,
    'page/not-found': renderNotFound,
  } = store.render

  return {
    renderEdit,
    renderIndex,
    renderShow,
    renderNotFound,
    showName,
  }
}

export const mapDispatchToProps = dispatch => {
  return {
    changeShowData: value => dispatch({ type: 'page/show/data', value }),
  }
}
