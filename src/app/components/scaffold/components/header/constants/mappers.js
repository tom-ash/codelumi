export const mapStateToProps = (store) => {
  return {
    language: store.app.language,
    authorized: store.user.authorize.data.authorized,
    name: store.user.authorize.data.name,
    device: store.app.device,
    showLinks: store.scaffold.header.control.showLinks,
    showUserShow: store.app.showUserShow
  }
}
  
export const mapDispatchToProps = (dispatch) => {
  return {
    changeApp: (value) => dispatch({ type: 'app', value: value}),
    changePath: (value) => dispatch({ type: 'route', value: value}),
    resetAnnouncementIndexControl: (value) => dispatch({ type: 'announcement/index/control/reset', value: value }),
    resetAnnouncementIndexInputs: (value) => dispatch({ type: 'announcement/index/inputs/reset', value: value }),
    resetAnnouncementIndexData: (value) => dispatch({ type: 'announcement/index/data/reset', value: value }),
    changeAnnouncementIndexControl: (value) => dispatch({ type: 'announcement/index/control', value: value }),
    resetUserAuthorizeControl: (value) => dispatch({ type: 'user/authorize/control/reset', value: value }),
    resetUserAuthorizeInputs: (value) => dispatch({ type: 'user/authorize/inputs/reset', value: value }),
    resetUserAuthorizeErrors: (value) => dispatch({ type: 'user/authorize/errors/reset', value: value }),
    changeControl: (value) => dispatch({ type: 'scaffold/header/control', value: value })
  }
}
  