import React from 'react'
import Checkbox from './components/checkbox'
import NumberInput from './components/number-input'

interface ContractSelectorInterface {
  setStore(newStore: object): void
  contractKey: 'b2b' | 'employment' | 'civilContract'
  contractValue: boolean
  label: string
  key: number
  contractMin: number
  contractMax: number
}

const ContractSelectorInterface = (props: ContractSelectorInterface) => {
  const { contractKey, contractValue, label, setStore, contractMin, contractMax } = props

  const checkboxProps = {
    contractKey,
    contractValue,
    label,
    setStore,
  }

  const minInputProps = {
    valueKey: `${contractKey}Min`,
    value: contractMin,
    setStore,
    label: 'Min.',
  }

  const maxInputProps = {
    valueKey: `${contractKey}Max`,
    value: contractMax,
    setStore,
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
