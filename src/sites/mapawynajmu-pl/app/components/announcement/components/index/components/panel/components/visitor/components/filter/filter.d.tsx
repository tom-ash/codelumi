interface FilterProps {
  showPanel: boolean
  showPanelKey: string
  min: number
  minInput: number
  max: number
  maxInput: number
  changeControl: ChangeControl
  changeData(): void
  changeInputs(): void

  minKey: string
  minInputKey: string
  maxKey: string
  maxInputKey: string
}

type ChangeControl = (args: { [key: string]: boolean }) => void

interface ChangeInputs {
  (args: {
    [key: string]: string | number
  }): void
}
