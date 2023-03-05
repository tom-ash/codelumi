import React from 'react'
import { ManagedRadio } from 'managed-inputs'
import { AccountType } from '../../../../../../../../mapawynajmu-pl/app/components/user/types/user.types'
import { useStore } from '../../../../../../functions/store/useStore'

export const AccountTypeRadio = () => {
  const { state, dispatch } = useStore()
  const setInputs = (value: any) => dispatch({ type: 'inputs', value })
  const { inputs } = state
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
