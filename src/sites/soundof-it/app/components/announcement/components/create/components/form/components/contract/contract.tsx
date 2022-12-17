import React from 'react'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'
import ContractSelector from './components/contract-selector/contract-selector'

interface ContractInterface {
  setStore(newStore: object): void
  b2b: boolean
  b2bMax: number
  b2bMin: number
  employment: boolean
  employmentMax: number
  employmentMin: number
  civilContract: boolean
  civilContractMax: number
  civilContractMin: number
}

const Contract = (props: ContractInterface) => {
  useStyles(styles)

  const {
    setStore,
    b2b,
    b2bMin,
    b2bMax,
    employment,
    employmentMin,
    employmentMax,
    civilContract,
    civilContractMin,
    civilContractMax,
  } = props

  const contracts = [
    {
      contractKey: 'b2b',
      contractValue: b2b,
      label: 'B2B',
      contractMin: b2bMin,
      contractMax: b2bMax,
    },
    {
      contractKey: 'employment',
      contractValue: employment,
      label: 'Permanent Employment',
      contractMin: employmentMin,
      contractMax: employmentMax,
    },
    {
      contractKey: 'civilContract',
      contractValue: civilContract,
      label: 'Mandate',
      contractMin: civilContractMin,
      contractMax: civilContractMax,
    },
  ] as const

  type Contract = {
    contractKey: 'b2b' | 'employment' | 'civilContract'
    contractValue: boolean
    label: string
    contractMin: number
    contractMax: number
  }

  const locationCheckboxesProps = {
    setStore,
    b2b,
    employment,
    civilContract,
  }

  return (
    <div>
      <h2>Contract</h2>
      {contracts.map((contract: Contract, index) => (
        <ContractSelector {...{ ...contract, setStore }} key={index} />
      ))}
    </div>
  )
}

export default Contract
