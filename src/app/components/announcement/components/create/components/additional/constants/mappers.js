export const mapStateToProps = (store) => {
  return {
    language: store.app.language,
    availabilityDateFocus: store.announcement.create.control.availabilityDateFocus,
    calendarMouseOver: store.announcement.create.control.calendarMouseOver,
    category: store.announcement.create.inputs.category,
    district: store.announcement.create.inputs.district,
    rentCurrency: store.announcement.create.inputs.rentCurrency,
    netRentAmount: store.announcement.create.inputs.netRentAmount,

    grossRentAmount: store.announcement.create.inputs.grossRentAmount,

    area: store.announcement.create.inputs.area,
    rooms: store.announcement.create.inputs.rooms,
    floor: store.announcement.create.inputs.floor,
    totalFloors: store.announcement.create.inputs.totalFloors,

    showAvilabilityDate: store.announcement.create.control.showAvilabilityDate,
    availabilityDate: store.announcement.create.inputs.availabilityDate,
    errors: store.announcement.create.errors
  }
}
  
export const mapDispatchToProps = (dispatch) => {
  return {
    changeControl: (value) => dispatch({ type: 'announcement/create/control', value }),
    changeInputs: (value) => dispatch({ type: 'announcement/create/inputs', value }),
    changeData: (value) => dispatch({ type: 'announcement/create/data', value }),
    changeErrors: (value) => dispatch({ type: 'announcement/create/errors', value }),
  }
}
  