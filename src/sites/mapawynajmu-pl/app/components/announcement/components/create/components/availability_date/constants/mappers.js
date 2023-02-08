export const mapStateToProps = store => {
  return {
    lang: store.app.lang,
    addAvailabilityDate: store.control.addAvailabilityDate,
    availabilityDate: store.announcement.create.inputs.availabilityDate,
  }
}

export const mapDispatchToProps = dispatch => {
  return {
    setControl: value => dispatch({ type: 'control', value }),
    setInputs: value => dispatch({ type: 'announcement/create/inputs', value }),
  }
}
