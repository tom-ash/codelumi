export const mapStateToProps = (store) => {
  return {
    language: store.app.language,
    connecting: store.user.edit.control.phoneConnecting,
    stage: store.user.edit.control.phoneStage,
    phoneCode: store.user.edit.inputs.phoneCode,
    body: store.user.edit.data.phoneBody,
    error: store.user.edit.errors.phone
  }
}
    
export const mapDispatchToProps = (dispatch) => {
  return {
    changeControl: (value) => dispatch({ type: 'user/edit/control', value }),
    changeInputs: (value) => dispatch({ type: 'user/edit/inputs', value }),
    changeErrors: (value) => dispatch({ type: 'user/edit/errors', value }),
    changeData: (value) => dispatch({ type: 'user/edit/data', value }),
  }
}
    