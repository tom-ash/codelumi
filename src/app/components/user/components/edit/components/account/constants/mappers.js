export const mapStateToProps = (store) => {
  const {
    name,
    accountType
  } = store.user.authorize.data

  return {
    language: store.app.language,
    name,
    accountType
  }
}
    
export const mapDispatchToProps = (dispatch) => {
  return {
    changeControl: (value) => dispatch({ type: 'user/edit/control', value: value }),
    changeInputs: (value) => dispatch({ type: 'user/edit/inputs', value: value }),
    changeErrors: (value) => dispatch({ type: 'user/edit/errors', value: value }),
    changeData: (value) => dispatch({ type: 'user/edit/data', value: value }),
    resetControl: (value) => dispatch({ type: 'user/edit/control/reset', value: value }),
    resetInputs: (value) => dispatch({ type: 'user/edit/inputs/reset', value: value }),
    resetErrors: (value) => dispatch({ type: 'user/edit/errors/reset', value: value }),
    resetData: (value) => dispatch({ type: 'user/edit/data/reset', value: value })
  }
}
    