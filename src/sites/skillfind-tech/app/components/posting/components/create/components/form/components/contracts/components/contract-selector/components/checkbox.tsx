import React from 'react'
import { ManagedCheckbox } from 'managed-inputs'
import { useDispatch } from 'react-redux'
import { ContractName } from '../../../contracts.types'

interface CheckboxInterface {
  contractKey: ContractName
  contractValue: boolean
  label: string
}

const B2BCheckbox = (props: CheckboxInterface) => {
  const dispatch = useDispatch()
  const setInputs = (value: any) => dispatch({ type: 'inputs', value })
  const { contractKey, contractValue: checked, label } = props
  const checkboxProps = {
    classNames: { container: 'form-input checkbox' },
    checked,
    label,
    onClick: (value: boolean) => setInputs({ [contractKey]: value }),
  }

  return <ManagedCheckbox {...checkboxProps} />
}

export default B2BCheckbox
