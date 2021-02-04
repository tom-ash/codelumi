export const mapStateToProps = (store) => {
  const {
    lang,
    svgs
  } = store.app
  const {
    name,
    accountType
  } = store.user.authorize.data

  return {
    svgs,
    lang,
    name,
    accountType
  }
}
    
export const mapDispatchToProps = (dispatch) => {
  return {
    changeControl: value => dispatch({ type: 'user/edit/control', value }),
    changeInputs: value => dispatch({ type: 'user/edit/inputs', value }),
    changeErrors: value => dispatch({ type: 'user/edit/errors', value }),
    changeData: value => dispatch({ type: 'user/edit/data', value }),
    resetControl: value => dispatch({ type: 'user/edit/control/reset', value }),
    resetInputs: value => dispatch({ type: 'user/edit/inputs/reset', value }),
    resetErrors: value => dispatch({ type: 'user/edit/errors/reset', value }),
    resetData: value => dispatch({ type: 'user/edit/data/reset', value })
  }
}
    