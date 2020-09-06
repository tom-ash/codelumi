export const mapStateToProps = (store) => {
  return {
    language: store.app.language,
    authorized: store.user.authorize.data.authorized
  }
}
    
export const mapDispatchToProps = (dispatch) => {
  return {
    changeApp: (value) => dispatch({ type: 'app', value }),
    changeAnnouncementControl: (value) => dispatch({ type: 'announcement/create/control', value })
  }
}
    