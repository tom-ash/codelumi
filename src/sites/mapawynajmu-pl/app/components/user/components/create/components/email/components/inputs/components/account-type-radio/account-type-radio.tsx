import React from 'react'
import { ManagedRadio } from 'managed-inputs'

enum AccountTypes {
  PERSONAL = 'personal',
  BUSINESS = 'business',
}

interface AccountTypeRadioProps {
  accountType: AccountTypes
  changeInputs: ChangeInputs
}

export const AccountTypeRadio = (props: AccountTypeRadioProps) => {
  const { accountType, changeInputs } = props

  const name = 'account-type'
  const classNames = { container: 'radio' }
  const checked = accountType
  const radios = [
    { value: 'personal', label: 'Konto Osobiste' },
    { value: 'business', label: 'Konto Firmowe' },
  ]
  const onClick = (value: AccountTypes) => changeInputs({ accountType: value })

  const radioProps = {
    name,
    classNames,
    checked,
    radios,
    onClick,
  }

  return <ManagedRadio {...radioProps} onFocus={() => console.log("QWEQWEQ123123")} />
}
