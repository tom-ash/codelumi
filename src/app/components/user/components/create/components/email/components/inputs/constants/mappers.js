export const mapStateToProps = (store) => {
  return {
    language: store.app.language,
    areaCode: store.user.create.inputs.areaCode,
    businessNameError: store.user.create.errors.businessName,
    taxIdentificationError: store.user.create.errors.taxIdentification,
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
  