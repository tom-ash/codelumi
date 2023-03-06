import React from 'react'
import { inputs } from '../../../../../../../constants/inputs'
import ButtonSpinnerDeprecated from '../../../../../../../../support/components/button-spinner/button-spinner'
import sendGaEvent from '../../../../../../../../../functions/google-analytics/send-ga-event'
import analyticEvents from '../constants/analytics/events'

const { VERIFICATION_CODE_INPUTTED_EVENT, VERIFY_CLICKED_EVENT } = analyticEvents

export function verificationManager() {
  const { icon } = inputs.verification
  const { setErrors, verification } = this.props

  return {
    id: 'user-create-email-verification',
    match: /^\d{0,4}$/,
    controlled: false,
    classNames: { container: 'text-input' },
    label: this.langHandler({ pl: 'Kod weryfikacyjny', en: 'Verification Code' }),
    onChange: () => setErrors({ verification: { pl: '', en: '' } }),
    onBlur: value => {
      this.verificationManager().validate(value)
      sendGaEvent(VERIFICATION_CODE_INPUTTED_EVENT)
    },
    validate: () => {
      const verificationCode = document.getElementById('user-create-email-verification').value
      if (verificationCode.length !== 4) {
        setErrors({
          verification: {
            pl: 'Nieprawidłowy kod weryfikacyjny.',
            en: 'Invalid verification code.',
          },
        })
        return false
      }
      return true
    },
    error: this.langHandler(verification),
  }
}

export function buttonManager() {
  const { connecting } = this.props

  return {
    classNames: { container: 'button' },
    label: (
      <ButtonSpinnerDeprecated
        connecting={connecting}
        label={{ pl: 'Potwierdź', en: 'Confirm' }}
        langHandler={this.langHandler}
      />
    ),
    onClick: () => {
      this.verify()
      sendGaEvent(VERIFY_CLICKED_EVENT)
    },
  }
}
