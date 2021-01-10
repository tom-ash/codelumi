export const mapStateToProps = (store) => {
  const {
    scalableVectorGraphics
  } = store.app

  return {
    lang: store.app.lang,
    category: store.announcement.create.inputs.category,
    district: store.announcement.create.inputs.district,
    area: store.announcement.create.inputs.area,
    errors: store.announcement.create.errors,
    scalableVectorGraphics
  }
}
  
export const mapDispatchToProps = (dispatch) => {
  return {
    changeControl: value => dispatch({ type: 'announcement/create/control', value }),
    changeInputs: value => dispatch({ type: 'announcement/create/inputs', value }),
    changeData: value => dispatch({ type: 'announcement/create/data', value }),
    changeErrors: value => dispatch({ type: 'announcement/create/errors', value }),
  }
}
  