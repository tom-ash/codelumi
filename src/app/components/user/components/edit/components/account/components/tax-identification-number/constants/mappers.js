export const mapStateToProps = (store) => {
  return {
    language: store.app.language,
    connecting: store.user.edit.taxIdentificationConnecting,
    stage: store.user.edit.control.taxIdentificationStage,
    currentValue: store.user.edit.data.taxIdentification,
    error: store.user.edit.errors.taxIdentification
  }
}
    
export const mapDispatchToProps = (dispatch) => {
  return {
    changeControl: (value) => dispatch({ type: 'user/edit/control', value: value }),
    changeData: (value) => dispatch({ type: 'user/edit/data', value: value }),
    changeErrors: (value) => dispatch({ type: 'user/edit/errors', value: value })
  }
}
    