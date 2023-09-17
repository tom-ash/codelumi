import React from 'react'
import { ManagedRadio } from 'managed-inputs'
import { AccountType } from '../../../../../../../../../../mapawynajmu-pl/app/components/user/types/user.types'
import { useDispatch } from 'react-redux'
import { useInputs } from '../../../../../../../../functions/store/use-inputs'

export const AccountTypeRadio = () => {
  const dispatch = useDispatch()
  const setInputs = (value: any) => dispatch({ type: 'inputs', value })
  const { accountType, accountTypes } = useInputs()
  const name = 'account-type'
  const classNames = { container: 'account-type' }
  const checked = accountType
  const radios = accountTypes
  const onClick = (value: AccountType) => setInputs({ accountType: value })

  const radioProps = {
    name,
    classNames,
    checked,
    radios,
    onClick,
  }

  return <ManagedRadio {...radioProps} />
}
