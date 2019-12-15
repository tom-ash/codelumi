export const mapStateToProps = (store) => {
  return {
    language: store.app.language,
    connecting: store.user.edit.control.taxNumberConnecting,
    stage: store.user.edit.control.taxNumberStage,
    currentValue: store.user.edit.data.taxNumber,
    error: store.user.edit.errors.taxNumber
  }
}
    
export const mapDispatchToProps = (dispatch) => {
  return {
    changeControl: (value) => dispatch({ type: 'user/edit/control', value: value }),
    changeData: (value) => dispatch({ type: 'user/edit/data', value: value }),
    changeErrors: (value) => dispatch({ type: 'user/edit/errors', value: value })
  }
}
    