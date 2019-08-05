export const mapStateToProps = (store) => {
  return {
    language: store.app.language,
    name: store.user.authorize.data.name,
    screenSize: store.app.screenSize,
    searchInitiated: store.announcement.index.control.full.searchInitiated,
  }
}
  
export const mapDispatchToProps = (dispatch) => {
  return {
    changeIndexControl: (value) => dispatch({ type: 'announcement/index/control/full', value: value }),
    changePath: (value) => dispatch({
      type: 'app/path',
      value: value
    }),
    changeConnecting: (value) => dispatch({
      type: 'USER_AUTHORIZE_CONNECTING',
      value: value
    }),
    changeData: (value) => dispatch({
      type: 'USER_AUTHORIZE_DATA',
      value: value
    }),
    changeLanguage: (value) => dispatch({ type: 'APP_LANGUAGE', value: value }),
  }
}
  