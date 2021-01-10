export const mapStateToProps = (store) => {
  const {
    lang
  } = store.app

  const {
    inputs
  } = store.page.create

  const {
    name
  } = inputs

  const {
    name: showName,
    en: showEn,
    pl: showPl
  } = store.page.show.data

  return {
    lang,
    name,
    inputs,
    showName,
    showEn,
    showPl
  }
}
  
export const mapDispatchToProps = (dispatch) => {
  return {
    changeInputs: value => dispatch({ type: 'page/create/inputs', value }),
    resetInputs: value => dispatch({ type: 'page/create/inputs/reset', value }),
    changeShowData: value => dispatch({ type: 'page/show/data', value }),
    changeRender: value => dispatch({ type: 'page/render', value })
  }
}