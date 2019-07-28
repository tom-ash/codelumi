export const mapStateToProps = (store) => {
  return {
    language: store.app.language,
    features: store.announcement.create.inputs.features
  }
}
    
export const mapDispatchToProps = (dispatch) => {
  return {
    changeInputs: (value) => dispatch({ type: 'announcement/create/inputs', value: value }),

  }
}
