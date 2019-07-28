export const mapStateToProps = (store) => {
  return {
    language: store.app.language,
    connecting: store.user.edit.businessNameConnecting,
    stage: store.user.edit.control.businessNameStage,
    currentValue: store.user.edit.data.businessName,
    error: store.user.edit.errors.businessName
  }
}
    
export const mapDispatchToProps = (dispatch) => {
  return {
    changeControl: (value) => dispatch({ type: 'user/edit/control', value: value }),
    changeData: (value) => dispatch({ type: 'user/edit/data', value: value }),
    changeErrors: (value) => dispatch({ type: 'user/edit/errors', value: value }),
    resetControl: (value) => dispatch({ type: 'user/edit/control/reset', value: value }),
    resetInputs: (value) => dispatch({ type: 'user/edit/control/reset', value: value }),
    resetErrors: (value) => dispatch({ type: 'user/edit/errors/reset', value: value })
  }
}
    