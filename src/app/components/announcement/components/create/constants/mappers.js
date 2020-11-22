export const mapStateToProps = (store) => {
  const {
    language,
    path,
    showAnnouncementEdit: showEdit,
    announcementId,
    isMobile,
    scalableVectorGraphics
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
    connecting,
    showDescription
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

  const {
    create_announcement: postData
  } = store.post.index.data

  return {
    showDescription,
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
    token,
    isMobile,
    scalableVectorGraphics,
    postData
  }
}
    
export const mapDispatchToProps = (dispatch) => {
  return {
    changeApp: value => dispatch({ type: 'app', value: value}),
    changeUserAuthorizeData: value => dispatch({ type: 'user/authorize/data', value }),
    changeAnnouncementShowData: value => dispatch({ type: 'announcement/show/data', value }),
    changeControl: value => dispatch({ type: 'announcement/create/control', value }),
    changeData: value => dispatch({ type: 'announcement/create/data', value }),
    changeInputs: value => dispatch({ type: 'announcement/create/inputs', value }),
    changeErrors: value => dispatch({ type: 'announcement/create/errors', value }),
    resetControl: value => dispatch({ type: 'announcement/create/control/reset', value }),
    resetInputs: value => dispatch({ type: 'announcement/create/inputs/reset', value }),
    resetErrors: value => dispatch({ type: 'announcement/create/errors/reset', value }),
    resetUserCreateControl: value => dispatch({ type: 'user/create/control/reset', value }),
    resetUserCreateInputs: value => dispatch({ type: 'user/create/inputs/reset', value }),
    resetUserCreateData: value => dispatch({ type: 'user/create/data/reset', value }),
    resetUserCreateErrors: value => dispatch({ type: 'user/create/errors/reset', value }),
    changePostData: value => dispatch({ type: 'post/index/data', value })
  }
}
    