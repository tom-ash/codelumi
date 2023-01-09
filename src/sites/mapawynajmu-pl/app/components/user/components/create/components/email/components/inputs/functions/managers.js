import { inputs } from '../../../../../../../constants/inputs'
import { EMPTY_LANG_OBJECT } from '../../../../../../../../../constants/lang-objects/empty'
import { phoneNumberValidator } from '../components/phone-number/phone-number.validator'

export function phoneNumberManager() {
  const { label } = inputs.phone
  const {
    dispatch
  } = this.props

  return {
    id: 'user-create-email-phone-number',
    autoComplete: 'tel-local',
    match: /^(\d){0,9}$/,
    type: 'tel',
    controlled: false,
    classNames: { container: 'text-input phone-number' },
    label: this.langHandler(label),
    placeholder: this.langHandler({ pl: 'Podaj numer telefonu', en: 'Provide phone number' }),
    onFocus: () => dispatch({
      type: 'user/create/errors',
      value: { phone: EMPTY_LANG_OBJECT }
    }),
    onBlur: (phoneNumber) => phoneNumberValidator({ phoneNumber, dispatch}),
    error: this.langHandler(this.props.phoneError),
  }
}
