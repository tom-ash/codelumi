import React from 'react'
import { useStore } from '../../../../../../functions/store/useStore'
import { update as submit } from '../../functions/update'
import { SubmitButton } from '../../../../../support/submit-button/submit-button'

export const UpdateButton = () => {
  const { state } = useStore()
  const { texts, data, inputs } = state
  const { updateButtonLabel: label } = texts
  const { apiUrl, id: imageId } = data
  const { width, height, storageKey, storageUrl, body } = inputs

  const submitButtonProps = {
    label,
    apiUrl,
    imageId,
    body,
    width,
    height,
    storageKey,
    storageUrl,
    submit,
  }

  return <SubmitButton {...submitButtonProps} />
}
