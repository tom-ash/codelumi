export const mapStateToProps = store => {
  return {
    lang: store.app.lang,
    category: store.announcement.create.inputs.category,
    area: store.announcement.create.inputs.area,
    errors: store.announcement.create.errors
  }
}
  
export const mapDispatchToProps = dispatch => {
  return {
    changeControl: value => dispatch({ type: 'announcement/create/control', value }),
    changeInputs: value => dispatch({ type: 'announcement/create/inputs', value }),
    changeData: value => dispatch({ type: 'announcement/create/data', value }),
    changeErrors: value => dispatch({ type: 'announcement/create/errors', value }),
  }
}
  