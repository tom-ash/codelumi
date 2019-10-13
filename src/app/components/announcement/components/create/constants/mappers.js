export const mapStateToProps = (store) => {
  const { control, inputs, errors } = store.announcement.create
  const { success, publishing } = control

  return {
    language: store.app.language,
    path: store.app.path,
    authorized: store.user.authorize.data.authorized,
    pictureBlobs: store.announcement.create.inputs.pictureBlobs,
    // creating

    success,
    publishing
  }
}
    
export const mapDispatchToProps = (dispatch) => {
  return {
    changePath: (value) => dispatch({ type: 'app/path', value: value}),
    changeControl: (value) => dispatch({ type: 'announcement/create/control', value: value }),
    changeInputs: (value) => dispatch({ type: 'announcement/create/inputs', value: value }),
    // changeData: (value) => dispatch({ type: 'announcement/create/data', value: value }),
    changeErrors: (value) => dispatch({ type: 'announcement/create/errors', value: value }),
    resetControl: (value) => dispatch({ type: 'announcement/create/control/reset', value: value }),
    resetInputs: (value) => dispatch({ type: 'announcement/create/inputs/reset', value: value }),
    resetErrors: (value) => dispatch({ type: 'announcement/create/errors/reset', value: value }),
  }
}
    