export const mapStateToProps = (store) => {
  const {
    language,
    path,
    showAnnouncementEdit: showEdit,
    announcementId
  } = store.app

  const {
    control,
    inputs,
    errors,
    data
  } = store.announcement.create

  const {
    step,
    editing,
    connecting
  } = control

  const {
    savedId
  } = data

  const {
    id,
    category,
    district,
    rentCurrency,
    netRentAmount,
    grossRentAmount,
    area,
    rooms,
    floor,
    totalFloors,
    availabilityDateSelect,
    availabilityDate,
    pictureBlobs: blobs,
    pictureUploads: uploads,
    features,
    furnishings,
    descriptionPolish,
    descriptionEnglish,
    mapLatitude,
    mapLongitude,
    verificationCode
  } = inputs

  const {
    token
  } = store.user.create.data

  return {
    language,
    path,
    showEdit,
    authorized: store.user.authorize.data.authorized,
    step,
    editing,
    connecting,
    announcementId,
    savedId,
    id,
    category,
    district,
    area,
    rooms,
    blobs,
    uploads,
    mapLatitude,
    mapLongitude,
    rentCurrency,
    netRentAmount,
    grossRentAmount,
    features,
    furnishings,
    descriptionPolish,
    descriptionEnglish,
    availabilityDate,
    floor,
    totalFloors,
    errors,
    verificationCode,
    token
  }
}
    
export const mapDispatchToProps = (dispatch) => {
  return {
    changeApp: value => dispatch({ type: 'app', value: value}),
    changeUserAuthorizeData: value => dispatch({ type: 'user/authorize/data', value }),
    changeControl: value => dispatch({ type: 'announcement/create/control', value }),
    changeData: value => dispatch({ type: 'announcement/create/data', value }),
    changeInputs: value => dispatch({ type: 'announcement/create/inputs', value }),
    changeErrors: value => dispatch({ type: 'announcement/create/errors', value }),
    resetControl: value => dispatch({ type: 'announcement/create/control/reset', value }),
    resetInputs: value => dispatch({ type: 'announcement/create/inputs/reset', value }),
    resetErrors: value => dispatch({ type: 'announcement/create/errors/reset', value }),
  }
}
    