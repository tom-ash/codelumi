import React from 'react'
import { useStore } from '../../../../../../../../../shared/app/functions/store/useStore'
import { ManagedRadio } from 'managed-inputs'
import { saveCookie } from '../../../../../../../functions/cookie-handlers'

export const StatisticsConsentRadio = () => {
  const { state, dispatch } = useStore()
  const { visitor } = state
  const { statisticsConsent } = visitor
  const name = 'statistics-consent'
  const classNames = { container: 'form-input radio' }
  const checked = statisticsConsent
  const radios = [
    { value: true, label: 'Zgadzam się' },
    { value: false, label: 'Nie zgadzam się' },
  ]
  const setVisitor = (value: any) => dispatch({ type: 'visitor', value })
  const onClick = (value: boolean) => {
    setVisitor({ statisticsConsent: value })
    saveCookie('_pdpaf', value, 'oneYear')
  }

  const radioProps = {
    name,
    classNames,
    checked,
    radios,
    onClick,
  }

  return <ManagedRadio {...radioProps} />
}
