export const mapStateToProps = (store) => {
  const {
    language,
    showUserCreate,
    showUserAuthorize,
    showUserEditPhoneVerify
  } = store.app
  const { control, inputs, data, errors } = store.announcement.create
  const { editing, connecting, success, publishing } = control

  const { authorized, phoneVerified } = store.user.authorize.data

  const { rentNetPerSqm, rentGross, rentGrossPerSqm } = data

  return {
    rentNetPerSqm,
    rentGross,
    rentGrossPerSqm,
    language,
    showUserCreate,
    showUserAuthorize,
    showUserEditPhoneVerify,
    authorized,
    phoneVerified,
    editing,
    connecting,    
    success,
    publishing,
    id: store.announcement.create.inputs.id,
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
    blobs: store.announcement.create.inputs.pictureBlobs,
    uploads: store.announcement.create.inputs.pictureUploads,
    features: store.announcement.create.inputs.features,
    furnishings: store.announcement.create.inputs.furnishings,
    descriptionPolish: store.announcement.create.inputs.descriptionPolish,
    descriptionEnglish: store.announcement.create.inputs.descriptionEnglish,
    mapLatitude: store.announcement.create.inputs.mapLatitude,
    mapLongitude: store.announcement.create.inputs.mapLongitude,
    errors: store.announcement.create.errors,

  }
}
    
export const mapDispatchToProps = (dispatch) => {
  return {
    changeApp: (value) => dispatch({ type: 'app', value: value}),
    changeControl: (value) => dispatch({ type: 'announcement/create/control', value: value }),
    changeInputs: (value) => dispatch({ type: 'announcement/create/inputs', value: value }),
    changeErrors: (value) => dispatch({ type: 'announcement/create/errors', value: value })
  }
}
