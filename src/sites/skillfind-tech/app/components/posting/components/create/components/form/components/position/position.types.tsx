export enum ContractName {
  b2b = 'b2b',
  employment = 'employment',
  civilContract = 'civilContract',
}

export interface Contract {
  contractKey: ContractName
  contractValue: boolean
  label: string
  contractMin: number
  contractMax: number
}
