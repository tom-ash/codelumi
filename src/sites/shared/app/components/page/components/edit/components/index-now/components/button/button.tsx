import React from 'react'
import { indexNow as submit } from '../../functions/index-now'
import { SubmitButton } from '../../../../../../../support/submit-button/submit-button'
import { useTexts } from '../../../../../../../../functions/store/use-texts'
import { useData } from '../../../../../../../../functions/store/use-data'
import { useInputs } from '../../../../../../../../functions/store/use-inputs'

interface ButtonInterface {
  (): React.ReactElement
}

export const Button: ButtonInterface = () => {
  const { indexNowButtonLabel } = useTexts()
  const { indexNowApiUrl } = useData()
  const { id } = useInputs()

  const submitButtonProps = {
    label: indexNowButtonLabel,
    indexNowApiUrl,
    id,
    submit,
  }

  return <SubmitButton {...submitButtonProps} />
}
