export const mapStateToProps = store => {
  const { lang } = store.app
  const { step, success } = store.user.create.control
  const { 'announcement/create/form': renderAnnouncementCreate } = store.render

  return {
    lang,
    renderAnnouncementCreate,
    authorized: store.user.authorize.data.authorized,
    success,
    step
  }
}

export const mapDispatchToProps = dispatch => {
  return {
    changeApp: value => dispatch({ type: 'app', value }),
    changeAnnouncementControl: value => dispatch({ type: 'announcement/create/control', value }),
    changeControl: value => dispatch({ type: 'user/create/control', value }),
    resetControl: value => dispatch({ type: 'user/create/control/reset', value }),
    resetInputs: value => dispatch({ type: 'user/create/inputs/reset', value }),
    resetData: value => dispatch({ type: 'user/create/data/reset', value }),
    resetErrors: value => dispatch({ type: 'user/create/errors/reset', value })
  }
}
