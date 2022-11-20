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
  changeControl: ChangeControl
  changeInputs(): void
}
