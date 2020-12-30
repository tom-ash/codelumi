export const mapStateToProps = (store) => {
  const {
    language,
    device,
    TODO
  } = store.app

  const {
    render
  } = store

  const {
    authorized
  } = store.user.authorize.data

  const {
    data: announcementData
  } = store.announcement

  return {
    language,
    authorized,
    device,
    announcementData,
    render
  }
}
  
export const mapDispatchToProps = (dispatch) => {
  return {
    changeApp: value => dispatch({ type: 'app', value: value}),
    changeRender: value => dispatch({ type: 'render', value }),
    resetAnnouncementIndexControl: value => dispatch({ type: 'announcement/index/control/reset', value }),
    resetAnnouncementIndexInputs: value => dispatch({ type: 'announcement/index/inputs/reset', value }),
    resetAnnouncementIndexData: value => dispatch({ type: 'announcement/index/data/reset', value }),
    // resetUserAuthorizeControl: value => dispatch({ type: 'user/authorize/control/reset', value }),
    // resetUserAuthorizeInputs: value => dispatch({ type: 'user/authorize/inputs/reset', value }),
    // resetUserAuthorizeErrors: value => dispatch({ type: 'user/authorize/errors/reset', value }),
    changeControl: value => dispatch({ type: 'scaffold/header/control', value }),
    
  }
}
  