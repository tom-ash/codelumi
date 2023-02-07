export const mapStateToProps = store => {
  return {
    lang: store.app.lang,
    addAvailabilityDate: store.announcement.create.control.addAvailabilityDate,
    availabilityDate: store.announcement.create.inputs.availabilityDate,
  }
}

export const mapDispatchToProps = dispatch => {
  return {
    changeControl: value => dispatch({ type: 'announcement/create/control', value }),
    changeInputs: value => dispatch({ type: 'announcement/create/inputs', value }),
  }
}
