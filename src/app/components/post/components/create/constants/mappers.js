export const mapStateToProps = (store) => {
  const {
    language
  } = store.app

  const {
    name,
    title,
    body
  } = store.post.create.inputs

  const {
    name: showName,
    title: showTitle,
    body: showBody
  } = store.post.show.data

  return {
    language,
    name,
    title,
    body,
    showName,
    showTitle,
    showBody
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