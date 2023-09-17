import React from 'react'
import { ManagedButton } from 'managed-inputs'
import { useDispatch } from 'react-redux'

export const AcceptButton = () => {
  const dispatch = useDispatch()
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
