import React from 'react'
import { useStore } from '../../../../../../functions/store/useStore'
import { indexNow as submit } from './functions/index-now'
import { SubmitButton } from '../../../../../support/submit-button/submit-button'

interface IndexNowButtonInterface {
  (): React.ReactElement
}

export const IndexNowButton: IndexNowButtonInterface = () => {
  const { state } = useStore()
  const { texts, data, inputs } = state
  const { indexNowButtonLabel } = texts
  const { indexNowApiUrl } = data
  const { id } = inputs

  const submitButtonProps = {
    label: indexNowButtonLabel,
    customContainerClassNames: 'index-now',
    indexNowApiUrl,
    id,
    submit,
  }

  return <SubmitButton {...submitButtonProps} />
}
