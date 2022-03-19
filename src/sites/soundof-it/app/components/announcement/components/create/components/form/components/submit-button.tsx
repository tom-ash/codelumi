//@ts-ignore
import React from 'react'
//@ts-ignore
import { ManagedButton } from 'managed-inputs'
//@ts-ignore
import submit from '../functions/submit.ts'

type submitButtonProps = {
  addJob(): void
}

const SubmitButton = (props: submitButtonProps) => {
  const { addJob } = props
  const buttonProps = {
    classNames: { container: 'submit-button' },
    label: 'Add Job',
    onClick: () => submit()
  }

  return <ManagedButton {...buttonProps} />
}

export default SubmitButton