export const mapStateToProps = (store) => {
  return {
    language: store.app.language,
    path: store.app.path,
    jumbotronPicture: store.scaffold.mainPage.jumbotronPicture
  }
}
    
export const mapDispatchToProps = (dispatch) => {
  return {
    changeMainPage: (value) => dispatch({ type: 'scaffold/main-page', value: value}),
  }
}
    