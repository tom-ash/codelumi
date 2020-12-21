export const mapStateToProps = (store) => {
  const {
    language
  } = store.app

  const {
    show: renderShow
  } = store.post.render

  const {
    inputs
  } = store.post.create

  const {
    name
  } = inputs

  const {
    name: showName,
    en: showEn,
    pl: showPl
  } = store.post.show.data

  return {
    language,
    renderShow,
    name,
    inputs,
    showName,
    showEn,
    showPl
  }
}
  
export const mapDispatchToProps = (dispatch) => {
  return {
    changeInputs: value => dispatch({ type: 'post/create/inputs', value }),
    resetInputs: value => dispatch({ type: 'post/create/inputs/reset', value }),
    changeShowData: value => dispatch({ type: 'post/show/data', value }),
    changeRender: value => dispatch({ type: 'post/render', value: value})
  }
}