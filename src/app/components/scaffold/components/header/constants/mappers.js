export const mapStateToProps = (store) => {
  return {
    language: store.app.language,
    name: store.user.authorize.data.name,
    screenSize: store.app.screenSize,
    showList: store.announcement.index.control.full.showList,
    showLinks: store.scaffold.header.control.showLinks
  }
}
  
export const mapDispatchToProps = (dispatch) => {
  return {
    changePath: (value) => dispatch({ type: 'app/path', value: value }),
    changeLanguage: (value) => dispatch({ type: 'APP_LANGUAGE', value: value }),
    changeIndexControl: (value) => dispatch({ type: 'announcement/index/control/full', value: value }),
    changeConnecting: (value) => dispatch({ type: 'USER_AUTHORIZE_CONNECTING', value: value }),
    changeData: (value) => dispatch({ type: 'USER_AUTHORIZE_DATA', value: value }),
    resetAnnouncementIndexControl: () => dispatch({ type: 'announcement/index/control/full/reset' }),
    resetAnnouncementIndexInputs: () => dispatch({ type: 'announcement/index/inputs/full/reset' }),
    resetAnnouncementIndexData: () => dispatch({ type: 'announcement/index/data/full/reset' }),
    changeControl: (value) => dispatch({ type: 'scaffold/header/control', value: value })
  }
}
  