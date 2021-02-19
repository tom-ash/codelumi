export const mapStateToProps = store => {
  const { lang } = store.app
  const { admin: isAdmin } = store.user.authorize.data

  return {
    lang,
    isAdmin
  }
}
  
export const mapDispatchToProps = dispatch => {
  return {
    changeApp: value => dispatch({ type: 'app', value }),
    changeRender: value => dispatch({ type: 'render', value })
  }
}
  