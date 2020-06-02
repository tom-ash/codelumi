export const mapStateToProps = (store) => {
  const {
    language,
    path,
    showAnnouncementEdit: showEdit,
    announcementId
  } = store.app

  const {
    control
  } = store.announcement.create

  const {
    success,
    publishing,
    showDescription
  } = control

  return {
    language,
    path,
    showEdit,
    announcementId,
    authorized: store.user.authorize.data.authorized,
    pictureBlobs: store.announcement.create.inputs.pictureBlobs,
    success,
    publishing,
    showDescription
  }
}
    
export const mapDispatchToProps = (dispatch) => {
  return {
    changeControl: (value) => dispatch({ type: 'announcement/create/control', value: value }),
    changeInputs: (value) => dispatch({ type: 'announcement/create/inputs', value: value }),
    changeErrors: (value) => dispatch({ type: 'announcement/create/errors', value: value }),
    resetControl: (value) => dispatch({ type: 'announcement/create/control/reset', value: value }),
    resetInputs: (value) => dispatch({ type: 'announcement/create/inputs/reset', value: value }),
    resetErrors: (value) => dispatch({ type: 'announcement/create/errors/reset', value: value }),
  }
}
    