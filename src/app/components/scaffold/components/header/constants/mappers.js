export const mapStateToProps = (store) => {

  const {
    language,
    TODO
  } = store.app

  const {
    category,
    district,
    area
  } = store.announcement.show.data

  return {
    language,
    authorized: store.user.authorize.data.authorized,
    name: store.user.authorize.data.name,
    device: store.app.device,
    category,
    district,
    area,
    render: store.render
  }
}
  
export const mapDispatchToProps = (dispatch) => {
  return {
    changeApp: value => dispatch({ type: 'app', value: value}),
    resetAnnouncementIndexControl: value => dispatch({ type: 'announcement/index/control/reset', value }),
    resetAnnouncementIndexInputs: value => dispatch({ type: 'announcement/index/inputs/reset', value }),
    resetAnnouncementIndexData: value => dispatch({ type: 'announcement/index/data/reset', value }),
    changeAnnouncementIndexControl: value => dispatch({ type: 'announcement/index/control', value }),
    resetUserAuthorizeControl: value => dispatch({ type: 'user/authorize/control/reset', value }),
    resetUserAuthorizeInputs: value => dispatch({ type: 'user/authorize/inputs/reset', value }),
    resetUserAuthorizeErrors: value => dispatch({ type: 'user/authorize/errors/reset', value }),
    changeControl: value => dispatch({ type: 'scaffold/header/control', value }),
    changeRender: value => dispatch({ type: 'render', value })
  }
}
  