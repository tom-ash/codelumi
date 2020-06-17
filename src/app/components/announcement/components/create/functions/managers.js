import React from 'react'
import { instantScroll } from '../../../../../functions/scrollers/instant-scroll'
import { saveTokens } from '../../../../user/functions/token-handlers'

export function addAnnouncementManager() {
  return {
    classNames: { container: 'new-form-input button' },
    label: this.languageHandler('Dalej', 'Next'),
    onClick: () => {
      this.publish()
      instantScroll()
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
    // onFocus: () => this.props.changeErrors({ area: noError }),
    onChange: value => changeInputs({ verificationCode: value }),
    // onBlur: () => {
    //   this.areaManager().validate()
    //   this.getRentAmounts()
    // },
    // validate: () => this.handleErrorOnValidate('area', this.props.area),
    // error: this.languageObjectHandler(this.props.errors.area)
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
      // changeControl({ connecting: true })
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
      // .catch(() => {
      //   changeErrors({
      //     verification: { pl: 'nieprawidłowy kod weryfikacyjny', en: 'invalid verification code' }
      //   })
      // })
      // .finally(() => {
      //   changeControl({ connecting: false })
      // })
    }
  }
}

export function goToAnnouncementManager() {
  const {
    changeApp,
    savedId
  } = this.props

  return {
    classNames: { container: 'new-form-input button' },
    label: this.languageHandler('Przejdź do Ogłoszenia', 'Go to the Announcement'),
    onClick: () => {
      changeApp({
        announcementId: savedId,
        showAnnouncementShow: true,
        showAnnouncementCreate: false,
        showAnnouncementEdit: false,
      })
    }
  }
}