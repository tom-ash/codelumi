export const mapStateToProps = store => {
  const { routeSynced, lang, isMobile } = store.app
  const {
    'announcement/create/form': renderForm,
    'announcement/edit': renderEdit,
    'announcement/create/verification': renderVerification,
    'announcement/create/summary': renderSuccess
  } = store.render
  const { authorized, admin } = store.user.authorize.data
  const { control, inputs, errors, data } = store.announcement.create
  const { step, connecting, savingAnnouncement, showDescription } = control
  const { announcement, user } = data
  const { accountType, email } = store.user.create.inputs

  const {
    category,
    district,
    area,
    blobs,
    picUploads,
    latitude,
    longitude,
    rentCurrency,
    netRentAmount,
    grossRentAmount,
    rooms,
    floor,
    totalFloors,
    availabilityDate,
    features,
    furnishings,
    polishDescription,
    englishDescription,
    addAvailabilityDate,
    locality,
    sublocality
  } = inputs

  return {
    routeSynced,
    renderForm, renderVerification, renderSuccess, renderEdit,
    accountType,
    email,
    lang,
    step,
    connecting,
    savingAnnouncement,
    category,
    district,
    area,
    rooms,
    blobs,
    picUploads,
    latitude,
    longitude,
    rentCurrency,
    netRentAmount,
    grossRentAmount,
    features,
    furnishings,
    showDescription,
    polishDescription,
    englishDescription,
    availabilityDate,
    floor,
    totalFloors,
    errors,
    isMobile,
    authorized,
    admin,
    addAvailabilityDate,
    announcement,
    user,
    locality,
    sublocality
  }
}
    
export const mapDispatchToProps = dispatch => {
  return {
    changeApp: value => dispatch({ type: 'app', value }),
    changeControl: value => dispatch({ type: 'announcement/create/control', value }),
    changeInputs: value => dispatch({ type: 'announcement/create/inputs', value }),
    changeErrors: value => dispatch({ type: 'announcement/create/errors', value }),
    changeData: value => dispatch({ type: 'announcement/create/data', value }),
    resetControl: value => dispatch({ type: 'announcement/create/control/reset', value }),
    resetInputs: value => dispatch({ type: 'announcement/create/inputs/reset', value }),
    resetErrors: value => dispatch({ type: 'announcement/create/errors/reset', value }),
    resetData: value => dispatch({ type: 'announcement/create/data/reset', value }),
    dispatch
  }
}
    