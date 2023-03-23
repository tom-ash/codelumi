import React from 'react'
import { useStore } from '../../../../../../../../../shared/app/functions/store/useStore'
import { ManagedButton } from 'managed-inputs'
import { saveCookie } from '../../../../../../../../../mapawynajmu-pl/app/functions/cookie-handlers'

export const AcceptButton = () => {
  const { dispatch } = useStore()
  const label = 'OK'
  const classNames = { container: 'button accept' }
  const setVisitor = (value: any) => dispatch({ type: 'visitor', value })
  const onClick = () => {
    setVisitor({
      statisticsConsent: true,
      marketingConsent: true,
    })
    saveCookie('_pdpaf', 'true', 'oneYear')
    saveCookie('_pdpsm', 'true', 'oneYear')
  }

  const buttonProps = {
    classNames,
    label,
    onClick,
  }

  return <ManagedButton {...buttonProps} />
}
