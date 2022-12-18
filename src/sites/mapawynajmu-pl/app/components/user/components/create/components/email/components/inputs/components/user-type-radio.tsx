import React from 'react'
import { ManagedRadio } from 'managed-inputs'
import { UserTypes } from '../../../../../../../types/user.types'

interface UserTypeRadioProps {
  accountType: UserTypes
  changeInputs: ChangeInputs
}

export const UserTypeRadio = (props: UserTypeRadioProps) => {
  const { accountType, changeInputs } = props

  const name = 'account-type'
  const classNames = { container: 'account-type' }
  const checked = accountType
  const radios = [
    { value: 'personal', label: 'Konto Osobiste' },
    { value: 'business', label: 'Konto Firmowe' },
  ]
  const onClick = (value: UserTypes) => changeInputs({ accountType: value })

  const radioProps = {
    name,
    classNames,
    checked,
    radios,
    onClick,
  }

  return <ManagedRadio {...radioProps} />
}
