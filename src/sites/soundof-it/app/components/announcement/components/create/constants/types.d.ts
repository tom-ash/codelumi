export interface Create {
  selectableSkills: Array<any>
  selectedSkills: Array<any>
  setStore(newStore: object): void
  changeRoute: ChangeRoute
  remote: boolean
  hybrid: boolean
  office: boolean
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
