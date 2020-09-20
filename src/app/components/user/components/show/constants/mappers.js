export const mapStateToProps = (store) => {
  const {
    language
  } = store.app
  
  const {
    name,
    accountType
  } = store.user.authorize.data

  return {
    language,
    name,
    accountType
  }
}
    
export const mapDispatchToProps = (dispatch) => {
  return {
    changeApp: value => dispatch({ type: 'app', value: value}),
    changeAnnouncementIndexControl: value => dispatch({ type: 'announcement/index/control', value }),
    changeAnnouncementIndexData: value => dispatch({ type: 'announcement/index/data', value }),
    changeUserAuthorized: value => dispatch({ type: 'user/authorize/authorized', value }),
    resetAuthorizeData: value => dispatch({ type: 'user/authorize/data/reset', value })
  }
}
    