export const mapStateToProps = store => {
  const { render } = store
  const { 'listings>new>form': renderForm, 'announcement/create/summary': renderSummary } = render

  return {
    renderCreate: renderForm || renderSummary,
  }
}

export const mapDispatchToProps = dispatch => {
  return {}
}
