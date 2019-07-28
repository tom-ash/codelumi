export const mapStateToProps = (store) => {
  return {
    authorized: store.user.authorize.data.authorized,
    announcementPublishing: store.announcement.create.control.publishing,
    success: store.user.create.control.success
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
