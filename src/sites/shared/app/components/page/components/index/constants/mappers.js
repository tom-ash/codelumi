export const mapStateToProps = store => {
  const { lang, routeSynced } = store.app
  const { 'page/index/manage': renderManage } = store.render
  const { pages } = store.page.index.data
  const { inputtedName } = store.page.index.inputs

  return {
    lang,
    routeSynced,
    renderManage,
    renderMap,
    pages,
    inputtedName
  }
}
  
export const mapDispatchToProps = dispatch => {
  return {
    changeInputs: value => dispatch({ type: 'page/index/inputs', value }),
    dispatch
  }
}