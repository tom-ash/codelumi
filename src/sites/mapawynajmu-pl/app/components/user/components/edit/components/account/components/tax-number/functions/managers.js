import React from 'react'
import ButtonSpinner from '../../../../../../../../support/components/button-spinner/button-spinner'
import { changetaxNumber } from './adapters'
import { inputs } from '../../../../../../../constants/inputs'
const noError = { pl: '', en: '' }

export function textManager() {
  const { changeErrors } = this.props
  const { icon, label } = inputs.taxNumber
  const { pl, en } = this.props.error

  return {
    id: 'user-edit-account-tax-identification-text',
    controlled: false,
    classNames: { container: 'form-input text' },
    label: this.langHandler(label),
    children: <i className={icon} />,
    onChange: () => changeErrors({ taxNumber: noError }),
    onBlur: value => this.textManager().validate(value),
    validate: value => {
      if (value.length < 10) {
        changeErrors({
          taxNumber: { pl: 'Nieprawidłowy numer identyfikacji podatkowej', en: 'Invalid tax identification number' },
        })
        return false
      }
      return true
    },
    error: this.langHandler({ pl, en }),
  }
}

export function buttonManager() {
  const { connecting } = this.props

  return {
    classNames: { container: 'form-input button' },
    label: (
      <ButtonSpinner connecting={connecting} label={{ pl: 'Zmień', en: 'Change' }} langHandler={this.langHandler} />
    ),
    onClick: () => {
      const taxNumber = document.getElementById('user-edit-account-tax-identification-text').value
      if (!this.textManager().validate(taxNumber)) return

      changetaxNumber.call(this, taxNumber)
    },
  }
}
