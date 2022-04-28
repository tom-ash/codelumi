export const mapStateToProps = store => {
  const {
    lang
  } = store.app

  const {
    pageKeys,
    pageKey
  } = store.page.index

  return {
    pageKeys,
    pageKey,
    lang
  }
}
  
export const mapDispatchToProps = dispatch => {
  return {
    changeState: value => dispatch({ type: 'page/index', value })
  }
}
