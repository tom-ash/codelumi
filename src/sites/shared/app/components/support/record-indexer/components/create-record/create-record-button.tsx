import React from 'react'
import { SubmitButton } from '../../../submit-button/submit-button'
import { useTexts } from '../../../../../functions/store/use-texts'
import { useApp } from '../../../../../functions/store/use-app'
import { useData } from '../../../../../functions/store/use-data'
import { useInputs } from '../../../../../functions/store/use-inputs'

interface CreateRecordButtonInterface {
  (props: { create: any }): React.ReactElement
}

export const CreateRecordButton: CreateRecordButtonInterface = props => {
  const { create: submit } = props
  const { createRecordButtonLabel: label } = useTexts()
  const { lang } = useApp()
  const { apiUrl } = useData()
  const { recordKey } = useInputs()

  const submitButtonProps = {
    label,
    lang,
    apiUrl,
    recordKey,
    submit,
  }

  return <SubmitButton {...submitButtonProps} />
}
