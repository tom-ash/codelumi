export const mapStateToProps = (store) => {
  return {
    language: store.app.language,
    files: store.announcement.create.inputs.pictureFiles,
    blobs: store.announcement.create.inputs.pictureBlobs,
    error: store.announcement.create.errors.pictures,
    addingPicture: store.announcement.create.control.addingPicture
  }
}
    
export const mapDispatchToProps = (dispatch) => {
  return {
    changeInputs: (value) => dispatch({ type: 'announcement/create/inputs', value: value }),
    changeErrors: (value) => dispatch({ type: 'announcement/create/errors', value: value }),
    changeControl: (value) => dispatch({ type: 'announcement/create/control', value: value })
  }
}
