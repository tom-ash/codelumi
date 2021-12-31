export const mapStateToProps = store => {
  return {
    lang: store.app.lang,
    siteMapLinks: store.app.siteMapLinks
  }
}
  
export const mapDispatchToProps = dispatch => {
  return {
    changeApp: value => dispatch({ type: 'app', value }),
  }
}
  