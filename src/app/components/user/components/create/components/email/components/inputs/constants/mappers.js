export const mapStateToProps = (store) => {
  return {
    language: store.app.language,
    phoneCode: store.user.create.inputs.phoneCode,
    businessNameError: store.user.create.errors.businessName,
    taxNumberError: store.user.create.errors.taxNumber,
    phoneError: store.user.create.errors.phone,
    emailError: store.user.create.errors.email,
    passwordError: store.user.create.errors.password
  }
}
  
export const mapDispatchToProps = (dispatch) => {
  return {
    changeControl: (value) => dispatch({ type: 'user/create/control', value: value }),
    changeInputs: (value) => dispatch({ type: 'user/create/inputs', value: value }),
    changeErrors: (value) => dispatch({ type: 'user/create/errors', value: value })
  }
}
  