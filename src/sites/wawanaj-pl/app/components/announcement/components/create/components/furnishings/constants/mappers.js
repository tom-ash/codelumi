export const mapStateToProps = (store) => {
  return {
    lang: store.app.lang,
    furnishings: store.announcement.create.inputs.furnishings,
    category: store.announcement.create.inputs.category,
    addFurnishings: store.announcement.create.inputs.addFurnishings
  }
}
    
export const mapDispatchToProps = (dispatch) => {
  return {
    changeInputs: value => dispatch({ type: 'announcement/create/inputs', value }),
  }
}
