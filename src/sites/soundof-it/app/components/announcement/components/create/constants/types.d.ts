export interface Create {
  selectableSkills: Array<any>,
  selectedSkills: Array<any>,
  setStore(newStore: object): void,
  changeRoute(): void,
  remote: boolean,
  hybrid: boolean,
  office: boolean
}
