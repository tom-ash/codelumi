export const mapStateToProps = (store) => {
  return {
    language: store.app.language,
    name: store.user.authorize.data.name,
  }
}
  
export const mapDispatchToProps = (dispatch) => {
  return {
  }
}
  