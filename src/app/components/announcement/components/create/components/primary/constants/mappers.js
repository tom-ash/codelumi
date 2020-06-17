export const mapStateToProps = (store) => {
  return {
    language: store.app.language,
    category: store.announcement.create.inputs.category,
    district: store.announcement.create.inputs.district,
    area: store.announcement.create.inputs.area,
    errors: store.announcement.create.errors
  }
}
  
export const mapDispatchToProps = (dispatch) => {
  return {
    changeControl: (value) => dispatch({ type: 'announcement/create/control', value: value }),
    changeInputs: (value) => dispatch({ type: 'announcement/create/inputs', value: value }),
    changeData: (value) => dispatch({ type: 'announcement/create/data', value: value }),
    changeErrors: (value) => dispatch({ type: 'announcement/create/errors', value: value }),
  }
}
  