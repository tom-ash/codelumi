export const mapStateToProps = store => {
  const { control, data } = store
  const { routeSynced, lang, isMobile } = store.app
  const {
    'announcement/create/form': renderForm,
    'announcement/edit': renderEdit,
    'announcement/create/verification': renderVerification,
    'announcement/create/summary': renderSuccess,
  } = store.render
  const { authorized, admin } = store.user.authorize.data
  const { inputs, errors } = store
  const {
    step,
    connecting,
    savingAnnouncement,
  } = control
  const { announcement, user } = data
  const { accountType, emailAddress, password, countryCode, phoneNumber, termsAndPrivacyConsent, businessName } =
    store.user.create.inputs

  const {
    category,
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
    sublocality,
    name,
    link,
    showPolishDescription,
    showEnglishDescription,
  } = inputs

  return {
    routeSynced,
    renderForm,
    renderVerification,
    renderSuccess,
    renderEdit,
    accountType,
    businessName,
    emailAddress,
    password,
    countryCode,
    phoneNumber,
    termsAndPrivacyConsent,
    lang,
    step,
    connecting,
    savingAnnouncement,
    category,
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
    sublocality,
    name,
    link,
    showPolishDescription,
    showEnglishDescription,
  }
}

export const mapDispatchToProps = dispatch => {
  return {
    setControl: value => dispatch({ type: 'control', value }),
    setData: value => dispatch({ type: 'data', value }),
    setInputs: value => dispatch({ type: 'inputs', value }),
    setErrors: value => dispatch({ type: 'errors', value }),
    dispatch,
  }
}
