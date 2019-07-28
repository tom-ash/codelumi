export const mapStateToProps = (store) => {
  return {
    language: store.app.language,
    authorized: store.user.authorize.data.authorized,
    phoneVerified: store.user.authorize.data.phoneVerified,
    editing: store.announcement.create.control.editing,
    connecting: store.announcement.create.control.connecting,    
    success: store.announcement.create.control.success,
    id: store.announcement.create.inputs.id,
    category: store.announcement.create.inputs.category,
    district: store.announcement.create.inputs.district,
    rentCurrency: store.announcement.create.inputs.rentCurrency,
    rentAmount: store.announcement.create.inputs.rentAmount,
    additionalFees: store.announcement.create.inputs.additionalFees,
    area: store.announcement.create.inputs.area,
    rooms: store.announcement.create.inputs.rooms,
    floor: store.announcement.create.inputs.floor,
    totalFloors: store.announcement.create.inputs.totalFloors,
    availabilityDateSelect: store.announcement.create.inputs.availabilityDateSelect,
    availabilityDate: store.announcement.create.inputs.availabilityDate,
    blobs: store.announcement.create.inputs.pictureBlobs,
    uploads: store.announcement.create.inputs.pictureUploads,
    features: store.announcement.create.inputs.features,
    furnishings: store.announcement.create.inputs.furnishings,
    descriptionPolish: store.announcement.create.inputs.descriptionPolish,
    descriptionEnglish: store.announcement.create.inputs.descriptionEnglish,
    mapLatitude: store.announcement.create.inputs.mapLatitude,
    mapLongitude: store.announcement.create.inputs.mapLongitude,
    errors: store.announcement.create.errors,
    publishing: store.announcement.create.control.publishing,
    userCreating: store.announcement.create.control.userCreating,
    phoneVerifying: store.announcement.create.control.phoneVerifying
  }
}
    
export const mapDispatchToProps = (dispatch) => {
  return {
    changePath: (value) => dispatch({ type: 'app/path', value: value }),
    changeControl: (value) => dispatch({ type: 'announcement/create/control', value: value }),
    changeInputs: (value) => dispatch({ type: 'announcement/create/inputs', value: value }),
    changeErrors: (value) => dispatch({ type: 'announcement/create/errors', value: value })
  }
}
