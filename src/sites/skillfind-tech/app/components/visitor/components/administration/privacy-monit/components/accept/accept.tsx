import React from 'react'
import { useStore } from '../../../../../../../../../shared/app/functions/store/useStore'
import { ManagedButton } from 'managed-inputs'

export const AcceptButton = () => {
  const { dispatch } = useStore()
  const label = 'OK'
  const classNames = { container: 'button accept' }
  const setVisitor = (value: any) => dispatch({ type: 'visitor', value })
  const onClick = () => {
    const consent = JSON.parse(localStorage.getItem('consent') as string)
    const updatedConsent = { ...consent, analytics_storage: 'granted', ad_storage: 'granted' }

    // @ts-ignore
    window.gtag('consent', 'update', updatedConsent)
    localStorage.setItem('consent', JSON.stringify(updatedConsent))
    setVisitor({ statisticsConsent: true, marketingConsent: true })
  }

  const buttonProps = {
    classNames,
    label,
    onClick,
  }

  return <ManagedButton {...buttonProps} />
}
