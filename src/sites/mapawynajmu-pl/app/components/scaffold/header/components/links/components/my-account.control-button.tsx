import React from 'react'
import { ControlButton } from '../../../../../../../../shared/app/components/support/control-button/control-button'

export const MyAccountControlButton = () => {
  const buttonProps = {
    controlKey: 'showMyAccountMenu',
    containerClassNames: 'my-account',
  }

  return <ControlButton {...buttonProps} />
}
