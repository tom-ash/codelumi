import React from 'react'
import { inputs } from '../../../../../../../constants/inputs'
import ButtonSpinner from '../../../../../../../../support/components/button-spinner/button-spinner'
import { sendGaEvent } from '../../../../../../../../../functions/google-analytics/send-ga-event'
import analyticEvents from '../constants/analytics/events'

const {
  VERIFICATION_CODE_INPUTTED_EVENT,
  VERIFY_CLICKED_EVENT
} = analyticEvents

export function verificationManager() {
  const { icon } = inputs.verification
  const { changeErrors, verification } = this.props

  return {
    id: 'user-create-email-verification',
    controlled: false,
    classNames: { container: 'form-input text' },
    label: this.langObjHandler({ pl: 'Kod weryfikacyjny', en: 'Verification Code' }),
    onChange: () => changeErrors({ verification: { pl: '', en: '' }}),
    onBlur: value => {
      this.verificationManager().validate(value)
      sendGaEvent(VERIFICATION_CODE_INPUTTED_EVENT)
    },
    validate: () => {
      const verificationCode = document.getElementById('user-create-email-verification').value
      if (verificationCode.length !== 4) {
        changeErrors({
          verification: {
            pl: 'Nieprawidłowy kod weryfikacyjny.',
            en: 'Invalid verification code.'
          }
        })
        return false
      }
      return true
    },
    error: this.langObjHandler(verification)
  }
}

export function buttonManager() {
  const { connecting } = this.props

  return {
    classNames: { container: 'form-input button' },
    label: (
      <ButtonSpinner
        connecting={connecting}
        label={{ pl: 'Dalej', en: 'Next' }}
        langObjHandler={this.langObjHandler}
      />
    ),
    onClick: () => {
      this.verify()
      sendGaEvent(VERIFY_CLICKED_EVENT)
    }
  }
}