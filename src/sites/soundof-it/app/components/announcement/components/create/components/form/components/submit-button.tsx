import React from 'react'
import { ManagedButton } from 'managed-inputs'
import submit from '../functions/submit'

type submitButtonProps = {
  selectedSkills: Array<any>,
  remote: boolean,
  hybrid: boolean,
  office: boolean,
  b2b: boolean,
  b2bMax: number,
  b2bMin: number,
  employment: boolean,
  employmentMax: number,
  employmentMin: number,
  civilContract: boolean,
  civilContractMax: number,
  civilContractMin: number
}

const SubmitButton = (props: submitButtonProps) => {
  const {
    selectedSkills,
    remote,
    hybrid,
    office,
    b2b,
    b2bMax,
    b2bMin,
    employment,
    employmentMax,
    employmentMin,
    civilContract,
    civilContractMax,
    civilContractMin
  } = props

  const buttonProps = {
    classNames: { container: 'submit-button' },
    label: 'Add Job',
    onClick: () => submit({
      selectedSkills,
      remote,
      hybrid,
      office,
      b2b,
      b2bMax,
      b2bMin,
      employment,
      employmentMax,
      employmentMin,
      civilContract,
      civilContractMax,
      civilContractMin
    })
  }

  return <ManagedButton {...buttonProps} />
}

export default SubmitButton