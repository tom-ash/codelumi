export const mapStateToProps = (store) => {
  return {
    language: store.app.language,
    siteMapLinks: store.app.siteMapLinks
  }
}
  
export const mapDispatchToProps = (dispatch) => {
  return {
    changeApp: value => dispatch({ type: 'app', value: value}),
  }
}
  