import React from 'react'
import ButtonSpinner from '../../../../../../../../support/components/button-spinner/button-spinner'

export function buttonManager() {
  const { connecting } = this.props
  
  return {
    classNames: { container: 'form-input button' },
    label: (
      <ButtonSpinner
        connecting={connecting}
        label={{ pl: 'Dalej', english: 'Next' }}
        languageObjectHandler={this.languageObjectHandler}
      />
    ),
    onClick: this.prepareUserAccount
  }
}
