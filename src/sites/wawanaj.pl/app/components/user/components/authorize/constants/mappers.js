export const mapStateToProps = (store) => {
  const {
    scalableVectorGraphics
  } = store.app

  return {
    lang: store.app.lang,
    authorized: store.user.authorize.data.authorized,
    scalableVectorGraphics
  }
}
    
export const mapDispatchToProps = (dispatch) => {
  return {
    changeApp: value => dispatch({ type: 'app', value }),
    changeRender: value => dispatch({ type: 'render', value }),
    changeAnnouncementControl: value => dispatch({ type: 'announcement/create/control', value })
  }
}
    