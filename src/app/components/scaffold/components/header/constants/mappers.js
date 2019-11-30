export const mapStateToProps = (store) => {
  return {
    language: store.app.language,
    authorized: store.user.authorize.data.authorized,
    name: store.user.authorize.data.name,
    screenSize: store.app.screenSize,
    showLinks: store.scaffold.header.control.showLinks
  }
}
  
export const mapDispatchToProps = (dispatch) => {
  return {
    changeApp: (value) => dispatch({ type: 'app', value: value}),
    resetAnnouncementIndexControl: (value) => dispatch({ type: 'announcement/index/control/reset', value: value }),
    resetAnnouncementIndexInputs: (value) => dispatch({ type: 'announcement/index/inputs/reset', value: value }),
    resetAnnouncementIndexData: (value) => dispatch({ type: 'announcement/index/data/reset', value: value }),
    changeAnnouncementIndexControl: (value) => dispatch({ type: 'announcement/index/control', value: value }),
    changeControl: (value) => dispatch({ type: 'scaffold/header/control', value: value }),
  }
}
  