import React from 'react'
import { sendNewValue } from './adapters'
import ButtonSpinner from '../../../../../../../../support/components/button-spinner/button-spinner'

const noError = { pl: '', en: '' }

export function textManager() {
  const {
    changeErrors,
    inputName,
    id,
    label,
    icon,
    error,
    errorText
  } = this.props

  return {
    id,
    controlled: false,
    classNames: { container: 'form-input text' },
    label,
    children: <i className={icon} />,
    onChange: () => changeErrors({ [`${inputName}`]: noError }),
    onBlur: value => this.textManager().validate(value),
    validate: value => {
      if (value.length < 1) {
        changeErrors({ [`${inputName}`]: errorText })
        return false
      }
      return true
    },
    error: this.languageObjectHandler(error)
  }
}

export function buttonManager() {
  const { id, connecting } = this.props

  return {
    classNames: { container: 'form-input button' },
    label: (
      <ButtonSpinner
        connecting={connecting}
        label={{ pl: 'Zmień', en: 'Change' }}
        languageObjectHandler={this.languageObjectHandler}
      />
    ),
    onClick: () => {
      const value = document.getElementById(id).value
      if (this.textManager().validate(value)) sendNewValue.call(this, value)
    }
  }
}
