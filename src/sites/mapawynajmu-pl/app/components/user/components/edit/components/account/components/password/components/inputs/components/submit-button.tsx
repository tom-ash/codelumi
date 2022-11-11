import React, { useContext } from 'react'
import { ManagedButton } from 'managed-inputs'
import { ButtonSpinner } from '../../../../../../../../../../support/components/button-spinner/button-spinner'

interface SubmitButtonProps {
  connecting: boolean
  label: string
  onClick(): void
}

export const SubmitButton = (props: SubmitButtonProps) => {
  const {
    connecting,
    label,
    onClick
  } = props

  const buttonSpinnerProps = {
    connecting,
    label
  }

  const buttonProps = {
    classNames: { container: 'submit-button' },
    label: <ButtonSpinner {...buttonSpinnerProps} />,
    onClick
  }

  return <ManagedButton {...buttonProps} />
}
