export const mapStateToProps = store => {
  return {
    lang: store.app.lang,
    connecting: store.user.edit.control.taxNumberConnecting,
    stage: store.user.edit.control.taxNumberStage,
    currentValue: store.user.edit.data.taxNumber,
    error: store.user.edit.errors.taxNumber
  }
}
    
export const mapDispatchToProps = (dispatch) => {
  return {
    changeControl: value => dispatch({ type: 'user/edit/control', value }),
    changeData: value => dispatch({ type: 'user/edit/data', value }),
    changeErrors: value => dispatch({ type: 'user/edit/errors', value })
  }
}
    