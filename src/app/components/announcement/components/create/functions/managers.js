import React from 'react'
import { saveTokens } from '../../../../user/functions/token-handlers'

export function addAnnouncementManager() {
  return {
    classNames: { container: 'new-form-input button' },
    label: this.languageHandler('Dalej', 'Next'),
    onClick: () => {
      this.publish()
    }
  }
}

export function emailVerificationCodeManager() {
  const {
    changeInputs,
    verificationCode
  } = this.props

  return {
    id: 'abc',
    classNames: { container: 'form-input text verification' },
    match: /^(\d){0,4}$/,
    children: <i className='fas fa-pen' />,
    value: verificationCode,
    onChange: value => changeInputs({ verificationCode: value })
  }
}

export function confirmManager() {
  const {
    changeUserAuthorizeData,
    changeControl,
    token,
    verificationCode
  } = this.props

  return {
    classNames: { container: 'new-form-input button' },
    label: this.languageHandler('Potwierdź', 'Confirm'),
    onClick: () => {
      fetch(API_URL + '/user_create_with_email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Token': token
        },
        body: JSON.stringify({ verificationCode })
      })
      .then(response => {
        if (response.status == 201) return response.json()

        throw new Error('SomethingWentWrong')
      })
      .then(json => {
        const {
          accessToken,
          name
        } = json

        saveTokens.call(this, accessToken)
        changeUserAuthorizeData({ authorized: true, name })
        changeControl({ step: 'publishing' })
      })
    }
  }
}
