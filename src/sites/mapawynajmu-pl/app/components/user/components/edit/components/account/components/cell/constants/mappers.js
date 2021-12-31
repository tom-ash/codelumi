export const mapStateToProps = store => {
  return {
    lang: store.app.lang,
    businessNameStage: store.user.edit.control.businessNameStage,
    taxNumberStage: store.user.edit.control.taxNumberStage,
    phoneStage: store.user.edit.control.phoneStage,
    emailStage: store.user.edit.control.emailStage,
    passwordStage: store.user.edit.control.passwordStage,
    destroyStage: store.user.destroy.control.stage,
    businessNameCurrentValue: store.user.edit.data.businessName,
    taxNumberCurrentValue: store.user.edit.data.taxNumber,
    phonephoneCodeCurrentValue: store.user.edit.data.countryCode,
    phoneBodyCurrentValue: store.user.edit.data.phoneNumber,
    emailCurrentValue: store.user.edit.data.email,
    firstNameConnecting: store.user.edit.control.firstNameConnecting,
    lastNameConnecting: store.user.edit.control.lastNameConnecting,
    businessNameConnecting: store.user.edit.control.businessNameConnecting,
    firstNameStage: store.user.edit.control.firstNameStage,
    lastNameStage: store.user.edit.control.lastNameStage,
    businessNameStage: store.user.edit.control.businessNameStage,
    firstNameCurrentValue: store.user.edit.data.firstName,
    lastNameCurrentValue: store.user.edit.data.lastName,
    businessNameCurrentValue: store.user.edit.data.businessName,
    firstNameError: store.user.edit.errors.firstName,
    lastNameError: store.user.edit.errors.lastName,
    businessNameError: store.user.edit.errors.businessName
  }
}

export const mapDispatchToProps = dispatch => {
  return {
    changeDestroyControl: value => dispatch({ type: 'user/destroy/control', value }),
    changeControl: value => dispatch({ type: 'user/edit/control', value }),
    changeData: value => dispatch({ type: 'user/edit/data', value }),
    changeErrors: value => dispatch({ type: 'user/edit/errors', value }),
    resetControl: value => dispatch({ type: 'user/edit/control/reset', value }),
    resetInputs: value => dispatch({ type: 'user/edit/control/reset', value }),
    resetErrors: value => dispatch({ type: 'user/edit/errors/reset', value })
  }
}
    