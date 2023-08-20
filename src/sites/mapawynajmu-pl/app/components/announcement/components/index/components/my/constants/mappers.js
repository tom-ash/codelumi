export const mapStateToProps = store => {
  const { app, render, control, data, inputs, texts } = store

  const { lang, isMobile } = app
  const { shareOnFacebookButtonLabel } = texts
  const { 'announcement/index/user': renderMy } = render
  const { connecting, fetch, beingDeleted } = control
  const { announcements, amount } = data
  const { switches, sort, offset } = inputs

  return {
    lang,
    isMobile,
    connecting,
    fetch,
    beingDeleted,
    offset,
    switches,
    sort,
    amount,
    announcements,
    renderMy,
    shareOnFacebookButtonLabel,
  }
}

export const mapDispatchToProps = dispatch => {
  return {
    setApp: value => dispatch({ type: 'app', value }),
    setControl: value => dispatch({ type: 'control', value }),
    setData: value => dispatch({ type: 'data', value }),
    setInputs: value => dispatch({ type: 'inputs', value }),
  }
}
