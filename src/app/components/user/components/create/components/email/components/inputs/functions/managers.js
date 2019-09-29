import { inputs } from '../../../../../../../constants/inputs'

export function businessNameManager() {
  return {
    id: 'user-create-email-business-name',
    autoComplete: 'off',
    controlled: false,
    classNames: { container: 'input-container text'},
    label: this.labelProvider(inputs.businessName.icon, inputs.businessName.label),
    onFocus: () => this.errorResetter('businessName'),
    onBlur: (value) => this.businessNameManager().validate(value),
    validate: (value) => this.businesstNameValidator(value),
    error: this.languageObjectHandler(this.props.businessNameError)
  }
}

export function areaCodeManager() {
  return {
    id: 'user-create-email-area-code',
    classNames: { container: 'input-container select phone-country-code'},
    value: this.props.areaCode,
    options: [ { value: '+48', text: '+48' }, { value: '+1', text: '+1' }, { value: '+44', text: '+44' } ],
    onSelect: (option) => this.props.changeInputs({ areaCode: option.value })
  }
}

export function phoneNumberManager() {
  const input = inputs.phone
  return {
    id: 'user-create-email-phone-number',
    autoComplete: 'off',
    type: 'tel',
    controlled: false,
    classNames: { container: 'input-container text phone-body'},
    label: this.labelProvider(input.icon, input.label),
    onFocus: () => this.errorResetter('phone'),
    onBlur: (value) => this.phoneNumberManager().validate(value),
    validate: (value) => this.phoneValidator(value),
    error: this.languageObjectHandler(this.props.phoneError)
  }
}

export function emailAddressManager() {
  const input = inputs.email
  return {
    id: 'user-create-email-email-address',
    autoComplete: 'off',
    type: 'email',
    controlled: false,
    classNames: { container: 'input-container text'},
    label: this.labelProvider(input.icon, input.label),
    onFocus: () => this.errorResetter('email'),
    onBlur: (value) => this.emailAddressManager().validate(value),
    validate: (value) => this.emailValidator(value),
    error: this.languageObjectHandler(this.props.emailError)
  }
}

export function passwordManager() {
  const input = inputs.password
  return {
    id: 'user-create-email-password',
    autoComplete: 'new-password',
    type: 'password',
    controlled: false,
    autoComplete: 'new-password',
    classNames: { container: 'input-container text'},
    label: this.labelProvider(input.icon, input.label),
    onFocus: () => this.errorResetter('password'),
    onBlur: (value) => this.passwordManager().validate(value),
    validate: (value) => this.passwordValidator(value),
    error: this.languageObjectHandler(this.props.passwordError)
  }
}
