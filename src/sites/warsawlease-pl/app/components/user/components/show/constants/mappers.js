export const mapStateToProps = store => {
  const {
    lang
  } = store.app
  
  const {
    name,
    accountType
  } = store.user.authorize.data

  return {
    lang,
    name,
    accountType
  }
}
    
export const mapDispatchToProps = dispatch => {
  return {
    changeApp: value => dispatch({ type: 'app', value }),
    changeRender: value => dispatch({ type: 'render', value }),
    resetAuthorizeData: value => dispatch({ type: 'user/authorize/data/reset', value })
  }
}
    