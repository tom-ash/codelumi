export const mapStateToProps = store => {
  const {
    lang,
    urlDataSynced
  } = store.app

  const {
    inputtedName
  } = store.page.create.inputs

  const {
    names
  } = store.page.create.data

  return {
    lang,
    urlDataSynced,
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