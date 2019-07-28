export const mapStateToProps = (store) => {
  return {
    language: store.app.language,
    terms: store.user.create.inputs.terms,
    privacy: store.user.create.inputs.privacy,
    termsError: store.user.create.errors.terms,
    privacyError: store.user.create.errors.privacy
  }
}

export const mapDispatchToProps = (dispatch) => {
  return {
    changeInputs: (value) => dispatch({ type: 'user/create/inputs', value: value }),
    changeErrors: (value) => dispatch({ type: 'user/create/errors', value: value })
  }
}
