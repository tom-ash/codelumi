export const mapStateToProps = (store) => {
  return {
    language: store.app.language,
    name: store.user.authorize.data.name
  }
}
    
export const mapDispatchToProps = (dispatch) => {
  return {
    changePath: (value) => dispatch({ type: 'app/path', value: value}),
    changeUserAuthorizeData: (value) => dispatch({ type: 'USER_AUTHORIZE_DATA', value: value }),
    changeUserAuthorized: (value) => dispatch({ type: 'user/authorize/authorized', value: value }),

    resetAuthorizeData: (value) => dispatch({ type: 'user/authorize/data/reset', value: value })
  }
}
    