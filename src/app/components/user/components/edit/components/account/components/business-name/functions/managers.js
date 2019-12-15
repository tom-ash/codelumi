import React from 'react'
import { handleLanguageVersions } from '../../../../../../../../../functions/shared.js'
import { changeBusinessName } from './adapters'
import ButtonSpinner from '../../../../../../../../support/components/button-spinner/button-spinner'
import { inputs } from '../../../../../../../constants/inputs'

const noError = { pl: '', en: '' }

export function textManager() {
  const { icon, label } = inputs.businessName

  return {
    id: 'user-edit-account-business-name-text',
    controlled: false,
    classNames: { container: 'form-input text' },
    label: handleLanguageVersions(this.props.language, {
      pl: 'Nazwa', en: 'Business Name'
    }),
    children: <i className={icon} />,
    onChange: () => this.props.changeErrors({ businessName: noError }),
    onBlur: (value) => this.textManager().validate(value),
    validate: (value) => {
      if (value.length < 1) {
        this.props.changeErrors({
          businessName: { pl: 'Nazwa nie moze być pusta.', en: 'The Business Name can\'t be blank.' }
        })
        return false
      }
      return true
    },
    error: this.languageObjectHandler({ pl: this.props.error.pl, en: this.props.error.en })
  }
}

export function buttonManager() {
  const { connecting } = this.props

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
      const businessName = document.getElementById('user-edit-account-business-name-text').value
      if (!this.textManager().validate(businessName)) return
      changeBusinessName.call(this, businessName)
    }
  }
}