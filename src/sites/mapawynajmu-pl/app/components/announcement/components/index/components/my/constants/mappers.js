export const mapStateToProps = store => {
  const { app, render, control, data, inputs } = store

  const { lang, routeSynced } = app
  const { 'announcement/index/user': renderMy } = render
  const { connecting, fetch, beingDeleted } = control
  const { announcements, amount } = data
  const { switches, sort, offset } = inputs

  return {
    lang,
    connecting,
    fetch,
    beingDeleted,
    offset,
    switches,
    sort,
    amount,
    announcements,
    renderMy,
    routeSynced,
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
