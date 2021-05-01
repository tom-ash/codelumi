export const mapStateToProps = store => {
  const { render } = store
  const { lang, device } = store.app
  const { authorized } = store.user.authorize.data

  return {
    render,
    lang,
    device,
    authorized
  }
}
  
export const mapDispatchToProps = dispatch => {
  return {
    changeRender: value => dispatch({ type: 'render', value })
  }
}
  