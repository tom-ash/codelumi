import React from 'react'
import useStyles from 'isomorphic-style-loader/useStyles'
import styles from './styles/styles.scss'
import ContractSelector from './components/contract-selector/contract-selector'

interface ContractInterface {
  setStore(newStore: object): void,
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

const Contract = (props: ContractInterface) => {
  useStyles(styles)

  const {
    setStore,
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

  const contracts = [
    {
      contractKey: 'b2b', 
      contractValue: b2b,
      label: 'B2B'
    },
    {
      contractKey: 'employment', 
      contractValue: employment,
      label: 'Permanent Employment'
    },
    {
      contractKey: 'civilContract', 
      contractValue: civilContract,
      label: 'Mandate'
    }
  ]

  type Contract = {
    contractKey: 'b2b' | 'employment' | 'civilContract', 
    contractValue: boolean,
    label: string
  }

  const locationCheckboxesProps = {
    setStore,
    b2b,
    employment,
    civilContract,
  }

  return (
    <div>
      <h2>
        Contract
      </h2>
      {contracts.map((contract: Contract, index) => (
        <ContractSelector {...{...contract, setStore }} key={index} />)
      )}
    </div>
  )
}

export default Contract
