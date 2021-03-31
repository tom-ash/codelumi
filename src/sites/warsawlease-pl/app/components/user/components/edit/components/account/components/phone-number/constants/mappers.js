export const mapStateToProps = store => {
  return {
    lang: store.app.lang,
    connecting: store.user.edit.control.phoneConnecting,
    stage: store.user.edit.control.phoneStage,
    countryCode: store.user.edit.inputs.countryCode,
    body: store.user.edit.data.phoneNumber,
    error: store.user.edit.errors.phone
  }
}
    
export const mapDispatchToProps = dispatch => {
  return {
    changeControl: value => dispatch({ type: 'user/edit/control', value }),
    changeInputs: value => dispatch({ type: 'user/edit/inputs', value }),
    changeErrors: value => dispatch({ type: 'user/edit/errors', value }),
    changeData: value => dispatch({ type: 'user/edit/data', value }),
  }
}
    