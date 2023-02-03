export const mapStateToProps = store => {
  const { links } = store
  const { lang } = store.app
  const { authorized } = store.user.authorize.data
  const { connecting, step } = store.user.create.control
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
