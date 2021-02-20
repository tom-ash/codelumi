export const mapStateToProps = store => {
  const {
    lang,
    urlDataSynced
  } = store.app

  const {
    name
  } = store.page.create.inputs

  const {
    names
  } = store.page.create.data

  return {
    lang,
    urlDataSynced,
    name,
    names
  }
}
  
export const mapDispatchToProps = dispatch => {
  return {
    changeInputs: value => dispatch({ type: 'page/create/inputs', value }),
    resetInputs: value => dispatch({ type: 'page/create/inputs/reset', value }),
    dispatch
  }
}