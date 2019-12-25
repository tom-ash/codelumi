export const mapStateToProps = (store) => {
  return {
    language: store.app.language,
    availabilityDateFocus: store.announcement.create.control.availabilityDateFocus,
    calendarMouseOver: store.announcement.create.control.calendarMouseOver,
    category: store.announcement.create.inputs.category,
    district: store.announcement.create.inputs.district,
    rentCurrency: store.announcement.create.inputs.rentCurrency,
    netRentAmount: store.announcement.create.inputs.netRentAmount,
    area: store.announcement.create.inputs.area,
    rooms: store.announcement.create.inputs.rooms,
    floor: store.announcement.create.inputs.floor,
    totalFloors: store.announcement.create.inputs.totalFloors,

    availabilityDateSelect: store.announcement.create.inputs.availabilityDateSelect,
    availabilityDate: store.announcement.create.inputs.availabilityDate,
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
  