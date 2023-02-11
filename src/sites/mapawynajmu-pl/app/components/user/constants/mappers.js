export const mapStateToProps = store => {
  const { app, render } = store
  const { lang } = app
  const {
    'user/create': renderCreate,
    'user/edit': renderEdit,
    'user/reset-password': renderEditPassword,
    'user/authorize': renderAuthorize,
  } = render

  return {
    lang,
    renderCreate,
    renderEdit,
    renderEditPassword,
    renderAuthorize,
  }
}

export const mapDispatchToProps = dispatch => {
  return {
    setApp: value => dispatch({ type: 'app', value }),
    setControl: value => dispatch({ type: 'control', value }),
  }
}
