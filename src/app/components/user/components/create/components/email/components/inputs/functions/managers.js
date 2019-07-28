import { managerAgent } from 'managed-inputs'
import { inputs } from '../../../../../../../constants/inputs'

export function businessNameManager(aspect, value) {
  return managerAgent(aspect, {
    id: 'user-create-email-business-name',
    autoComplete: 'off',
    controlled: false,
    classNames: { container: 'form-input text'},
    label: this.labelProvider(inputs.businessName.icon, inputs.businessName.label),
    onFocus: () => this.errorResetter('businessName'),
    onBlur: () => this.businessNameManager('validate', value),
    validate: () => this.businesstNameValidator(value),
    error: this.languageObjectHandler(this.props.businessNameError)
  })
}

export function taxIdentificationNumberManager(aspect, value) {
  return managerAgent(aspect, {
    id: 'user-create-email-tax-identification-number',
    autoComplete: 'off',
    controlled: false,
    classNames: { container: 'form-input text'},
    label: this.labelProvider(inputs.taxIdentificationNumber.icon, inputs.taxIdentificationNumber.label),
    onFocus: () => this.errorResetter('taxIdentification'),
    onBlur: () => this.taxIdentificationNumberManager('validate', value),
    validate: () => this.taxIdentificationValidator(value),
    error: this.languageObjectHandler(this.props.taxIdentificationError)
  })
}

export function areaCodeManager(aspect, option) {
  return managerAgent(aspect, {
    id: 'user-create-email-area-code',
    classNames: { container: 'form-input select'},
    value: this.props.areaCode,
    options: [ { value: '+48', text: '+48' }, { value: '+1', text: '+1' }, { value: '+44', text: '+44' } ],
    onSelect: () => this.props.changeInputs({ areaCode: option.value })
  })
}

export function phoneNumberManager(aspect, value) {
  const input = inputs.phone
  return managerAgent(aspect, {
    id: 'user-create-email-phone-number',
    autoComplete: 'off',
    type: 'tel',
    controlled: false,
    classNames: { container: 'form-input text'},
    label: this.labelProvider(input.icon, input.label),
    onFocus: () => this.errorResetter('phone'),
    onBlur: () => this.phoneNumberManager('validate', value),
    validate: () => this.phoneValidator(value),
    error: this.languageObjectHandler(this.props.phoneError)
  })
}

export function emailAddressManager(aspect, value) {
  const input = inputs.email
  return managerAgent(aspect, {
    id: 'user-create-email-email-address',
    autoComplete: 'off',
    type: 'email',
    controlled: false,
    classNames: { container: 'form-input text'},
    label: this.labelProvider(input.icon, input.label),
    onFocus: () => this.errorResetter('email'),
    onBlur: () => this.emailAddressManager('validate', value),
    validate: () => this.emailValidator(value),
    error: this.languageObjectHandler(this.props.emailError)
  })
}

export function passwordManager(aspect, value) {
  const input = inputs.password
  return managerAgent(aspect, {
    id: 'user-create-email-password',
    autoComplete: 'new-password',
    type: 'password',
    controlled: false,
    autoComplete: 'new-password',
    classNames: { container: 'form-input text'},
    label: this.labelProvider(input.icon, input.label),
    onFocus: () => this.errorResetter('password'),
    onBlur: () => this.passwordManager('validate', value),
    validate: () => this.passwordValidator(value),
    error: this.languageObjectHandler(this.props.passwordError)
  })
}
