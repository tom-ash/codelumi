import { ANNOUNCEMENT_CREATE_FORM_TRACK, ANNOUNCEMENT_CREATE_VERIFICATION_TRACK, ANNOUNCEMENT_CREATE_SUCCESS_TRACK, ANNOUNCEMENT_EDIT_TRACK } from '../../../../../../shared/constants/tracks/tracks'

export const mapStateToProps = store => {
  const { lang, isMobile } = store.app
  const {
    [ANNOUNCEMENT_CREATE_FORM_TRACK]: renderForm,
    [ANNOUNCEMENT_CREATE_VERIFICATION_TRACK]: renderVerification,
    [ANNOUNCEMENT_CREATE_SUCCESS_TRACK]: renderSuccess,
    [ANNOUNCEMENT_EDIT_TRACK]: renderEdit
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
    addAvailabilityDate
  } = inputs

  return {
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
    user
  }
}
    
export const mapDispatchToProps = dispatch => {
  return {
    changeApp: value => dispatch({ type: 'app', value }),
    changeRender: value => dispatch({ type: 'render', value }),
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
    