import React from 'react'
import { useStore } from '../../../../../../../../shared/app/functions/store/useStore'
import { SubmitButton as BaseSubmitButton } from '../../../../../../../../shared/app/components/support/submit-button/submit-button'

interface SubmitButtonInterface {
  (props: {
    publish: () => Promise<void>
  }): React.ReactElement
}

export const SubmitButton: SubmitButtonInterface = ({ publish }) => {
  const { state } = useStore()
  const { texts } = state
  const { submitButton: label } = texts

  const submitButtonProps = {
    label,
    submit: publish,
    customContainerClassNames: 'create',
  }

  return <BaseSubmitButton {...submitButtonProps} />
}
