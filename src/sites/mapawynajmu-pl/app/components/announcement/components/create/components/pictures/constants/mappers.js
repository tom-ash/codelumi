export const mapStateToProps = store => {
  const {
    app: {
      lang
    },
    render: {
      'announcement/edit': renderEdit
    },
    control: {
      addingPicture,
    },
    inputs: {
      picFiles: files,
      blobs,
    },
    errors: {
      pictures: error
    },
  } = store

  return {
    lang,
    renderEdit,
    files,
    blobs,
    error,
    addingPicture,
  }
}

export const mapDispatchToProps = dispatch => {
  return {
    setInputs: value => dispatch({ type: 'inputs', value }),
    setErrors: value => dispatch({ type: 'errors', value }),
    setControl: value => dispatch({ type: 'control', value }),
  }
}
