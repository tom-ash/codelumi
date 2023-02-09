export const mapStateToProps = store => {
  const { app, links, user, control } = store
  const { lang } = app
  const { authorized } = user
  const { connecting, step } = control
  const {
    'user/create/form': renderForm,
    'user/create/verification': renderVerification,
    'user/create/confirmation': renderConfirmation,
    'announcement/create/form': renderAnnouncementCreate,
  } = store.render

  return {
    renderForm,
    renderVerification,
    renderConfirmation,
    renderAnnouncementCreate,
    lang,
    authorized,
    connecting,
    step,
    links,
  }
}

export const mapDispatchToProps = dispatch => ({})
