export const mapStateToProps = (store) => {
  const { showCreate } = store.user.create.control

  return {
    language: store.app.language,
    path: store.app.path,
    showCreate
    // showCreate: true
  }
}
    
export const mapDispatchToProps = (dispatch) => {
  return {
    changeShowUser: (value) => dispatch({ type: 'app/show/user', value: value }),
    changeControl: (value) => dispatch({ type: 'user/create/control', value: value }),
  }
}
    