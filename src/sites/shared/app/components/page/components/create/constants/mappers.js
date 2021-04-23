export const mapStateToProps = store => {
  const { lang, routeSynced } = store.app
  const { inputtedName } = store.page.create.inputs
  const { names } = store.page.create.data

  return {
    lang,
    routeSynced,
    inputtedName,
    names
  }
}
  
export const mapDispatchToProps = dispatch => {
  return {
    changeInputs: value => dispatch({ type: 'page/create/inputs', value }),
    dispatch
  }
}