//@ts-ignore
import React from 'react'
//@ts-ignore
import { ManagedButton } from 'managed-inputs'
//@ts-ignore
import submit from '../functions/submit.ts'

type submitButtonProps = {
  selectedSkills: Array<any>
}

const SubmitButton = (props: submitButtonProps) => {
  const { selectedSkills } = props

  console.log(selectedSkills)

  const buttonProps = {
    classNames: { container: 'submit-button' },
    label: 'Add Job',
    onClick: () => submit({
      selectedSkills
    })
  }

  return <ManagedButton {...buttonProps} />
}

export default SubmitButton