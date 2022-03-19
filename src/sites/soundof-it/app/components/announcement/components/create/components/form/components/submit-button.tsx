//@ts-ignore
import React from 'react'
//@ts-ignore
import { ManagedButton } from 'managed-inputs'

type submitButtonProps = {
  addJob(): void
}

const SubmitButton = (props: submitButtonProps) => {
  const { addJob } = props
  const buttonProps = {
    classNames: { container: 'submit-button' },
    label: 'Add Job',
    onClick: () => {
      console.log('ADD JOB')
    }
  }

  return <ManagedButton {...buttonProps} />
}

export default SubmitButton