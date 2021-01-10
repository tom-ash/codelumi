import React from 'react'
import ButtonSpinner from '../../../../../../../../support/components/button-spinner/button-spinner'
import { sendGaEvent } from '../../../../../../../../../functions/google-analytics/send-ga-event'
import { analyticEvent } from '../constants/analytic-event'

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
      this.prepareUserAccount()
      sendGaEvent(analyticEvent)
    }
  }
}
