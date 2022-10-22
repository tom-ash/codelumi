export const mapStateToProps = store => {
  const { lang } = store.app
  const { authorized } = store.user.authorize.data
  const { connecting, step } = store.user.create.control
  const {
    'user/create/form': renderForm,
    'user/create/verification': renderVerification,
    'announcement/create/form': renderAnnouncementCreate,
  } = store.render

  return {
    renderForm,
    renderVerification,
    renderAnnouncementCreate,
    lang,
    authorized,
    connecting,
    step,
  }
}

export const mapDispatchToProps = dispatch => ({})
