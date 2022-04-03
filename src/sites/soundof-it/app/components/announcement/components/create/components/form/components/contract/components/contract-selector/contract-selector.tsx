import React from 'react'
import Checkbox from './components/checkbox'

interface ContractSelectorInterface {
  setStore(newStore: object): void,
  contractKey: 'b2b' | 'employment' | 'civilContract', 
  contractValue: boolean,
  label: string,
  key: number
}

const ContractSelectorInterface = (props: ContractSelectorInterface) => {
  const {
    contractKey,
    contractValue,
    label,
    setStore
  } = props

  const checkboxProps = {
    contractKey,
    contractValue,
    label,
    setStore
  }

  return (
    <div className='contract-selector'>
      <Checkbox {...checkboxProps} />
    </div>
  )
}

export default ContractSelectorInterface
