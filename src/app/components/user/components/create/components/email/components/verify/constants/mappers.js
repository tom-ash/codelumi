export const mapStateToProps = (store) => {
  return {
    language: store.app.language,
    verification: store.user.create.control.verification,
    token: store.user.create.data.token
  }
}
  
export const mapDispatchToProps = (dispatch) => {
  return {
    changePath: (value) => dispatch({ type: 'app/path', value: value }),
    changeAnnouncementControl: (value) => dispatch({ type: 'announcement/create/control', value: value }),
    changeUserAuthorized: (value) => dispatch({ type: 'user/authorize/authorized', value: value }),
    changeData: (value) => dispatch({ type: 'USER_AUTHORIZE_DATA', value: value }),
    changeControl: (value) => dispatch({ type: 'user/create/control', value: value })
  }
}
  