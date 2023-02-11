export const mapStateToProps = store => {
  const { app, render, control } = store

  const { lang } = app
  const { 'announcement/create/form': renderAnnouncementCreate } = render
  const { step, success } = control

  return {
    lang,
    renderAnnouncementCreate,
    authorized: store.user.authorized,
    success,
    step,
  }
}

export const mapDispatchToProps = dispatch => {
  return {
    setApp: value => dispatch({ type: 'app', value }),
    setControl: value => dispatch({ type: 'control', value }),
  }
}
