export const mapStateToProps = (store) => {
  return {
    language: store.app.language,
    name: store.user.authorize.data.name,
    screenSize: store.app.screenSize,
    showLinks: store.scaffold.header.control.showLinks
  }
}
  
export const mapDispatchToProps = (dispatch) => {
  return {
    changePath: (value) => dispatch({ type: 'app/path', value: value }),
    changeLanguage: (value) => dispatch({ type: 'APP_LANGUAGE', value: value }),
    resetAnnouncementIndexControl: (value) => dispatch({ type: 'announcement/index/control/reset', value: value }),
    resetAnnouncementIndexInputs: (value) => dispatch({ type: 'announcement/index/inputs/reset', value: value }),
    resetAnnouncementIndexData: (value) => dispatch({ type: 'announcement/index/data/reset', value: value }),
    changeAnnouncementIndexControl: (value) => dispatch({ type: 'announcement/index/control', value: value }),
    changeControl: (value) => dispatch({ type: 'scaffold/header/control', value: value }),

    changeShowUser: (value) => dispatch({ type: 'app/show/user', value: value }),
    changeUserCreateControl: (value) => dispatch({ type: 'user/create/control', value: value }),
  }
}
  