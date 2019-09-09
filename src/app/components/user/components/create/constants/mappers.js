export const mapStateToProps = (store) => {
  const { publishing: publishingAnnouncement } = store.announcement.create.control
  return {
    authorized: store.user.authorize.data.authorized,
    success: store.user.create.control.success,
    publishingAnnouncement
  }
}

export const mapDispatchToProps = (dispatch) => {
  return {
    changePath: (value) => dispatch({ type: 'app/path', value: value}),
    changeControl: (value) => dispatch({ type: 'user/create/control', value: value }),
    resetControl: (value) => dispatch({ type: 'user/create/control/reset', value: value }),
    resetInputs: (value) => dispatch({ type: 'user/create/inputs/reset', value: value }),
    resetData: (value) => dispatch({ type: 'user/create/data/reset', value: value }),
    resetErrors: (value) => dispatch({ type: 'user/create/errors/reset', value: value })
  }
}
