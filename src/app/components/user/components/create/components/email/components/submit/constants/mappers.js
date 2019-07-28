export const mapStateToProps = (store) => {
  return {
    language: store.app.language
  }
}

export const mapDispatchToProps = (dispatch) => {
  return {
    changeAuthorized: (value) => dispatch({ type: 'user/authorize/authorized', value: value }),
    changeControl: (value) => dispatch({ type: 'user/create/control', value: value }),
    changeData: (value) => dispatch({ type: 'user/create/data', value: value }),
    changeErrors: (value) => dispatch({ type: 'user/create/errors', value: value })
  }
}
