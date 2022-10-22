export const mapStateToProps = store => {
  const render = store.render
  const { 'announcement/create/form': renderForm, 'announcement/create/summary': renderSummary } = render

  return {
    renderCreate: renderForm || renderSummary,
  }
}

export const mapDispatchToProps = dispatch => {
  return {
    // setStore: value => dispatch({ type: 'announcement/create', value }),
  }
}
