import React from 'react'
import { useStore } from '../../../../../../../../shared/app/functions/store/useStore'
import { ManagedButton } from 'managed-inputs'
import { createAsset } from '../../functions/create/create'

export const AddButton = () => {
  const { state, dispatch } = useStore()
  const { texts, data } = state
  const { addAssetButtonLabel: label } = texts
  const classNames = { container: 'create-button' }
  const onClick = createAsset

  const buttonProps = {
    classNames,
    label,
    onClick,
  }

  return <ManagedButton {...buttonProps} />
}
