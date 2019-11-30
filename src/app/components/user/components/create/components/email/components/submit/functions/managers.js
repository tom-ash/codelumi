import React from 'react'
import WindmillSpinner from '../../../../../../../../support/components/spinner/components/windmill/windmill.js'

export function buttonManager() {
  const { connecting } = this.props
  
  return {
    classNames: { container: 'form-input button' },
    label: connecting ? <WindmillSpinner spinnerClass='very-small-windmill-spinner'/> : this.languageHandler('Dalej', 'Next'),
    onClick: this.prepareUserAccount
  }
}
