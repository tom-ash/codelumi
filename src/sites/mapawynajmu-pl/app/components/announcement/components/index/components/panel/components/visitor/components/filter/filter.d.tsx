interface FilterProps {
  label: string
  unit: string
  options: number[]
  showPanel: boolean
  showPanelKey: string
  min: number
  minInput: number
  minKey: string
  minInputKey: string
  max: number
  maxInput: number
  maxKey: string
  maxInputKey: string
  setControl: setControl
  changeInputs(): void
}
