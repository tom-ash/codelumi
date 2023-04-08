import React from 'react'
import { useStore } from '../../../../../functions/store/useStore'
import { SubmitButton } from '../../../submit-button/submit-button'

interface CreateRecordButtonInterface {
  (props: { create: any }): React.ReactElement
}

export const CreateRecordButton: CreateRecordButtonInterface = props => {
  const { create: submit } = props
  const { state } = useStore()
  const { app, texts, data, inputs } = state
  const { createRecordButtonLabel: label } = texts
  const { lang } = app
  const { apiUrl } = data
  const { recordKey } = inputs

  const submitButtonProps = {
    label,
    lang,
    apiUrl,
    recordKey,
    submit,
  }

  return <SubmitButton {...submitButtonProps} />
}
