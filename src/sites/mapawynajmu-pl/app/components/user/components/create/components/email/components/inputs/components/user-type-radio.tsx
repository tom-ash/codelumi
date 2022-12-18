import React from 'react'
import { ManagedRadio } from 'managed-inputs'
import { UserTypes } from '../../../../../../../types/user.types'

interface UserTypeRadioProps {
  accountType: UserTypes
  changeInputs: ChangeInputs
  langHandler: LangHandler
}

export const UserTypeRadio = (props: UserTypeRadioProps) => {
  const { accountType, changeInputs, langHandler } = props

  const name = 'account-type'
  const classNames = { container: 'account-type' }
  const checked = accountType
  const radios = [
    // @ts-ignore
    { value: 'personal', label: langHandler({ pl: 'Konto Osobiste', en: 'Personal Account' }) },
    // @ts-ignore
    { value: 'business', label: langHandler({ pl: 'Konto Firmowe', en: 'Business Account' }) },
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
