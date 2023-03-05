export const mapStateToProps = store => {
  const { app, render, control, inputs } = store

  const { lang } = app
  const { 'announcement/create/form': renderAnnouncementCreate } = render
  const { step, success } = control

  const {
    emailAddress
  } = inputs

  return {
    lang,
    renderAnnouncementCreate,
    authorized: store.user.authorized,
    success,
    step,
    emailAddress,
  }
}

export const mapDispatchToProps = dispatch => {
  return {
    setApp: value => dispatch({ type: 'app', value }),
    setControl: value => dispatch({ type: 'control', value }),
  }
}
