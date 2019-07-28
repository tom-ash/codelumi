export const mapStateToProps = (store) => {
  return {
    language: store.app.language,
    furnishings: store.announcement.create.inputs.furnishings
  }
}
    
export const mapDispatchToProps = (dispatch) => {
  return {
    changeInputs: (value) => dispatch({ type: 'announcement/create/inputs', value: value }),
  }
}
