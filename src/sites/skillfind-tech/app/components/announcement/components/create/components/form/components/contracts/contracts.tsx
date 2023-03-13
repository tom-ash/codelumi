import React from 'react'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'
import ContractSelector from './components/contract-selector/contract-selector'
import { useStore } from 'react-redux'
import { ContractName, Contract } from './contracts.types'

interface Store {
  inputs: {
    b2b: boolean
    b2bMin: number
    b2bMax: number
  }
}

export const Contracts = () => {
  useStyles(styles)

  const { inputs } = useStore<Store>().getState()
  const {
    b2b,
    b2bMin,
    b2bMax,
    // employment,
    // employmentMin,
    // employmentMax,
    // civilContract,
    // civilContractMin,
    // civilContractMax,
  } = inputs

  const contracts = [
    {
      contractKey: ContractName.b2b,
      contractValue: b2b,
      label: 'B2B',
      contractMin: b2bMin,
      contractMax: b2bMax,
    },
    // {
    //   contractKey: 'employment',
    //   contractValue: employment,
    //   label: 'Permanent Employment',
    //   contractMin: employmentMin,
    //   contractMax: employmentMax,
    // },
    // {
    //   contractKey: 'civilContract',
    //   contractValue: civilContract,
    //   label: 'Mandate',
    //   contractMin: civilContractMin,
    //   contractMax: civilContractMax,
    // },
  ] as const

  return (
    <div>
      <h2>Contract</h2>
      {contracts.map((contract: Contract) => (
        <ContractSelector
          {...contract}
          key={contract.label}
        />
      ))}
    </div>
  )
}
