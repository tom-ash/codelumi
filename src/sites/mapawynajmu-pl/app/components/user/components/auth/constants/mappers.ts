// @ts-ignore
export const mapStateToProps = store => {
  const { app, data } = store
  const { lang } = app
  const { authorized } = data

  return {
    lang,
    authorized,
  }
}

// @ts-ignore
export const mapDispatchToProps = dispatch => {
  return {
    // @ts-ignore
    setApp: value => dispatch({ type: 'app', value }),
    // @ts-ignore
    set_User: value => dispatch({ type: 'user', value }),
  }
}
