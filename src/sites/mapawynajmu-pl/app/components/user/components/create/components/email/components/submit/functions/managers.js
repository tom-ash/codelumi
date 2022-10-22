import React from 'react'
import ButtonSpinner from '../../../../../../../../support/components/button-spinner/button-spinner'
import sendGaEvent from '../../../../../../../../../functions/google-analytics/send-ga-event'
import { analyticEvent } from '../constants/analytic-event'
import createUser from './create-user.js'
import { buildUserObject } from './adapters.js'

export function buttonManager() {
  const { connecting } = this.props

  return {
    classNames: { container: 'form-input button' },
    label: (
      <ButtonSpinner
        connecting={connecting}
        label={{ pl: 'Zarejestruj', en: 'Register' }}
        langHandler={this.langHandler}
      />
    ),
    onClick: () => {
      const userObject = buildUserObject.call(this)
      if (!userObject) return

      createUser.call(this, userObject)
      sendGaEvent(analyticEvent)
    },
  }
}
