export const mapStateToProps = store => {
  const {
    lang,
    routeSynced
  } = store.app

  const {'page/index/manage': renderManage } = store.render
  const { pageKeys, pageKey } = store.page.index

  console.log(store.page.index)

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
