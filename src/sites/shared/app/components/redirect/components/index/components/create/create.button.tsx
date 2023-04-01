import React from 'react'
import { useStore } from '../../../../../../functions/store/useStore'
import { ManagedButton } from 'managed-inputs'
import { createAsset } from './functions/create'

export const CreateButton = () => {
  const { state } = useStore()
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
