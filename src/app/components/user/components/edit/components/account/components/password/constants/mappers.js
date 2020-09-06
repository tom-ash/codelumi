export const mapStateToProps = (store) => {
  return {
    language: store.app.language,
    path: store.app.path,
    connecting: store.user.edit.control.passwordConnecting,
    stage: store.user.edit.control.passwordStage,
    step: store.user.edit.control.passwordStep,
    error: store.user.edit.errors.password
  }
}
    
export const mapDispatchToProps = (dispatch) => {
  return {
    changeApp: (value) => dispatch({ type: 'app', value }),
    changeAnnouncementControl: (value) => dispatch({ type: 'announcement/create/control', value }),
    changeControl: (value) => dispatch({ type: 'user/edit/control', value }),
    changeData: (value) => dispatch({ type: 'user/edit/data', value }),
    changeErrors: (value) => dispatch({ type: 'user/edit/errors', value })
  }
}
    