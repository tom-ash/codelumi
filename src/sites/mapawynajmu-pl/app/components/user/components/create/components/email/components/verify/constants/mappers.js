export const mapStateToProps = store => {
  const { app, control, data, inputs, errors } = store

  const { lang } = app
  const { connecting } = control
  const { id: announcementId } = data
  const { email } = inputs
  const { verification } = errors

  return {
    lang,
    email,
    verification,
    connecting,
    announcementId,
  }
}

export const mapDispatchToProps = dispatch => {
  return {
    changeApp: value => dispatch({ type: 'app', value }),
    changeAnnouncementCreateControl: value => dispatch({ type: 'announcement/create/control', value }),
    set_User: value => dispatch({ type: 'user', value }),
    setControl: value => dispatch({ type: 'control', value }),
    setErrors: value => dispatch({ type: 'errors', value }),
  }
}
