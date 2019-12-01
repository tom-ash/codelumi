export const mapStateToProps = (store) => {
  return {
    language: store.app.language,
    name: store.user.authorize.data.name
  }
}
    
export const mapDispatchToProps = (dispatch) => {
  return {
    changeApp: (value) => dispatch({ type: 'app', value: value}),
    changeAnnouncementIndexControl: (value) => dispatch({ type: 'announcement/index/control', value: value }),
    changeAnnouncementIndexData: (value) => dispatch({ type: 'announcement/index/data', value: value }),
    changeUserAuthorized: (value) => dispatch({ type: 'user/authorize/authorized', value: value }),
    resetAuthorizeData: (value) => dispatch({ type: 'user/authorize/data/reset', value: value })
  }
}
    