export const mapStateToProps = (store) => {
  return {
    language: store.app.language,
    furnishings: store.announcement.create.inputs.furnishings,
    category: store.announcement.create.inputs.category,
    addFurnishings: store.announcement.create.inputs.addFurnishings
  }
}
    
export const mapDispatchToProps = (dispatch) => {
  return {
    changeInputs: (value) => dispatch({ type: 'announcement/create/inputs', value }),
  }
}
