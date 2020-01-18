export const mapStateToProps = (store) => {
  const {
    accountType,
    phoneCode
  } = store.user.create.inputs

  const {
    accountType: accountTypeError,
    firstName: firstNameError,
    lastName: lastNameError,
    businessName: businessNameError,
    taxNumber: taxNumberError,
    phone: phoneError,
    email: emailError,
    password: passwordError
  } = store.user.create.errors
  
  return {
    language: store.app.language,
    accountType,
    phoneCode,
    accountTypeError,
    firstNameError,
    lastNameError,
    businessNameError,
    taxNumberError,
    phoneError,
    emailError,
    passwordError
  }
}
  
export const mapDispatchToProps = (dispatch) => {
  return {
    changeControl: value => dispatch({ type: 'user/create/control', value: value }),
    changeInputs: value => dispatch({ type: 'user/create/inputs', value: value }),
    changeErrors: value => dispatch({ type: 'user/create/errors', value: value })
  }
}
  