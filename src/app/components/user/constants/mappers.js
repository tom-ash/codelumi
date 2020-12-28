export const mapStateToProps = (store) => {
  const {
    language,
    path,
    TODO
  } = store.app

  return {
    language,
    path,
    TODO
  }
}
    
export const mapDispatchToProps = (dispatch) => {
  return {
    changeApp: value => dispatch({ type: 'app', value }),
    changeAnnouncementControl: value => dispatch({ type: 'announcement/create/control', value }),
    changeControl: value => dispatch({ type: 'user/create/control', value }),
  }
}
    