import React from 'react'
import { ManagedButton } from 'managed-inputs'
import submit from '../functions/submit'

type submitButtonProps = {
  selectedSkills: Array<any>,
  remote: boolean,
  hybrid: boolean,
  office: boolean
}

const SubmitButton = (props: submitButtonProps) => {
  const {
    selectedSkills,
    remote,
    hybrid,
    office
  } = props

  const buttonProps = {
    classNames: { container: 'submit-button' },
    label: 'Add Job',
    onClick: () => submit({
      selectedSkills,
      remote,
      hybrid,
      office
    })
  }

  return <ManagedButton {...buttonProps} />
}

export default SubmitButton