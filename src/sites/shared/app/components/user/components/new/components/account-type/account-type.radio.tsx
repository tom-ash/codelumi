import React from 'react'
import { useStore, useDispatch } from 'react-redux'
import { ManagedRadio } from 'managed-inputs'
import { AccountType } from '../../../../../../../../mapawynajmu-pl/app/components/user/types/user.types'

export const AccountTypeRadio = () => {
  const dispatch = useDispatch()
  const setInputs = (value: any) => dispatch({ type: 'inputs', value })
  const { inputs } = useStore().getState()
  const { accountType, accountTypes } = inputs
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
