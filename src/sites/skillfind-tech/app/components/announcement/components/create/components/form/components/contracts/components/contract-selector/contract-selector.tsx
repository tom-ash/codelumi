import React from 'react'
import Checkbox from './components/checkbox'
import NumberInput from './components/number-input'
import { ContractName } from '../../contracts.types'

interface ContractSelectorInterface {
  contractKey: ContractName
  contractValue: boolean
  label: string
  contractMin: number
  contractMax: number
}

const ContractSelectorInterface = (props: ContractSelectorInterface) => {
  const { contractKey, contractValue, label, contractMin, contractMax } = props

  const checkboxProps = {
    contractKey,
    contractValue,
    label,
    // setStore,
  }

  const minInputProps = {
    valueKey: `${contractKey}Min`,
    value: contractMin,
    // setStore,
    label: 'Min.',
  }

  const maxInputProps = {
    valueKey: `${contractKey}Max`,
    value: contractMax,
    // setStore,
    label: 'Max.',
  }

  return (
    <div className='contract-selector'>
      <Checkbox {...checkboxProps} />
      {contractValue && (
        <div>
          <NumberInput {...minInputProps} />
          <NumberInput {...maxInputProps} />
        </div>
      )}
    </div>
  )
}

export default ContractSelectorInterface
