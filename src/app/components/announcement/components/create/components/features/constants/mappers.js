export const mapStateToProps = (store) => {
  return {
    language: store.app.language,
    features: store.announcement.create.inputs.features,
    category: store.announcement.create.inputs.category,
    addFeatures: store.announcement.create.inputs.addFeatures,
  }
}
    
export const mapDispatchToProps = (dispatch) => {
  return {
    changeInputs: (value) => dispatch({ type: 'announcement/create/inputs', value: value })
  }
}
