import { ANNOUNCEMENT_EDIT_TRACK } from '../../../../../../shared/constants/tracks/tracks'

export const mapStateToProps = store => {
  const {
    lang,
    isMobile
  } = store.app

  const {
    [ANNOUNCEMENT_EDIT_TRACK]: renderEdit
  } = store.render
  const {
    authorized,
    admin
  } = store.user.authorize.data
  const {
    control,
    inputs,
    errors,
    data
  } = store.announcement.create

  const {
    step,
    connecting,
    showDescription,
    showAvilabilityDate
  } = control

  const {
    id
  } = data

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
    englishDescription
  } = inputs

  const {
    token
  } = store.user.create.data

  return {
    renderEdit,
    lang,
    step,
    connecting,
    id,
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
    showAvilabilityDate
  }
}
    
export const mapDispatchToProps = dispatch => {
  return {
    changeApp: value => dispatch({ type: 'app', value }),
    changeRender: value => dispatch({ type: 'render', value }),
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
    resetUserCreateErrors: value => dispatch({ type: 'user/create/errors/reset', value })
  }
}
    