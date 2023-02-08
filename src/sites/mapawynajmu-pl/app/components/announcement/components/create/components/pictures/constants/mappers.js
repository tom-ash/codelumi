export const mapStateToProps = store => {
  const { 'announcement/edit': renderEdit } = store.render

  return {
    renderEdit,
    lang: store.app.lang,
    files: store.announcement.create.inputs.picFiles,
    blobs: store.announcement.create.inputs.blobs,
    error: store.errors.pictures,
    addingPicture: store.control.addingPicture,
  }
}

export const mapDispatchToProps = dispatch => {
  return {
    setInputs: value => dispatch({ type: 'announcement/create/inputs', value }),
    setErrors: value => dispatch({ type: 'errors', value }),
    setControl: value => dispatch({ type: 'control', value }),
  }
}
