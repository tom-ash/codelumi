import React from 'react'
import { ManagedButton } from 'managed-inputs'
import { createAsset } from '../../functions/create/create'
import { useTexts } from '../../../../../../../../shared/app/functions/store/use-texts'

export const AddButton = () => {
  const { addAssetButtonLabel: label } = useTexts()
  const classNames = { container: 'create-button' }
  const onClick = createAsset

  const buttonProps = {
    classNames,
    label,
    onClick,
  }

  return <ManagedButton {...buttonProps} />
}
